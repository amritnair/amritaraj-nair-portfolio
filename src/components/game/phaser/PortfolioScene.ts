import Phaser from "phaser";
import { NPC_DOGS } from "../npcData";
import { BONE_TILE, MAP_H, MAP_W, OBSTACLES, T, TILE, tileToWorld } from "../mapData";

const BASE = import.meta.env.BASE_URL;
const TALK_RADIUS = 44;

export interface GameCallbacks {
  onNearNpc: (id: string | null) => void;
  onBoneFound: () => void;
}

export class PortfolioScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys!: Record<string, Phaser.Input.Keyboard.Key>;
  private callbacks!: GameCallbacks;
  private npcSprites: { id: string; sprite: Phaser.GameObjects.Sprite }[] = [];
  private bone?: Phaser.GameObjects.Sprite;
  private boneCollected = false;
  private running = false;

  constructor() {
    super("PortfolioScene");
  }

  init(data: GameCallbacks) {
    this.callbacks = data;
  }

  preload() {
    this.load.image("bg-back", `${BASE}sunnyland/environment/back.png`);
    this.load.image("bg-mid", `${BASE}sunnyland/environment/middle.png`);
    this.load.image("tileset", `${BASE}sunnyland/environment/tileset.png`);
    this.load.image("tree", `${BASE}sunnyland/environment/tree.png`);
    this.load.image("bush", `${BASE}sunnyland/environment/bush.png`);
    this.load.image("sign", `${BASE}sunnyland/environment/sign.png`);
    this.load.image("house", `${BASE}sunnyland/environment/house.png`);
    this.load.image("gem", `${BASE}sunnyland/sprites/gem.png`);
    this.load.atlas("sprites", `${BASE}sunnyland/atlas/atlas.png`, `${BASE}sunnyland/atlas/atlas.json`);
    this.load.audio("bgm", `${BASE}sunnyland/sound/platformer_level03_loop.ogg`);
  }

  create() {
    this.textures.get("tileset").setFilter(Phaser.Textures.FilterMode.NEAREST);
    this.textures.get("sprites").setFilter(Phaser.Textures.FilterMode.NEAREST);

    const worldW = MAP_W * TILE;
    const worldH = MAP_H * TILE;

    // Parallax sky layers
    const bg = this.add.tileSprite(worldW / 2, worldH / 2 - 40, worldW + 200, worldH, "bg-back").setScrollFactor(0.2).setDepth(-10);
    const mid = this.add.tileSprite(worldW / 2, worldH / 2, worldW + 100, worldH, "bg-mid").setScrollFactor(0.35).setDepth(-9);
    bg.setDisplaySize(worldW + 200, 180);
    mid.setDisplaySize(worldW + 100, 120);

    const map = this.make.tilemap({ tileWidth: TILE, tileHeight: TILE, width: MAP_W, height: MAP_H });
    const tiles = map.addTilesetImage("tileset", "tileset", TILE, TILE, 0, 0)!;
    const ground = map.createBlankLayer("ground", tiles, 0, 0)!;
    ground.setDepth(0);

    const grass = [T.GRASS, T.GRASS2, T.GRASS3, T.GRASS4];
    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        const v = grass[(x * 3 + y * 7) % grass.length];
        ground.putTileAt(v, x, y);
      }
    }

    // Cross paths
    const cx = Math.floor(MAP_W / 2);
    const cy = Math.floor(MAP_H / 2);
    for (let x = 3; x < MAP_W - 3; x++) {
      for (let dy = -1; dy <= 1; dy++) ground.putTileAt(T.PATH, x, cy + dy);
    }
    for (let y = 3; y < MAP_H - 3; y++) {
      for (let dx = -1; dx <= 1; dx++) ground.putTileAt(T.PATH2, cx + dx, y);
    }

    // Small pond (dirt patch)
    for (let y = 6; y <= 9; y++) {
      for (let x = 6; x <= 10; x++) ground.putTileAt(T.DIRT, x, y);
    }

    // Park border path ring
    for (let x = 2; x < MAP_W - 2; x++) {
      ground.putTileAt(T.PATH3, x, 2);
      ground.putTileAt(T.PATH3, x, MAP_H - 3);
    }
    for (let y = 2; y < MAP_H - 2; y++) {
      ground.putTileAt(T.PATH3, 2, y);
      ground.putTileAt(T.PATH3, MAP_W - 3, y);
    }

    // Decorations + collision
    const obstacles = this.physics.add.staticGroup();
    OBSTACLES.forEach(([tx, ty]) => {
      const { x, y } = tileToWorld(tx, ty);
      const tree = this.add.image(x, y - 20, "tree").setDepth(y).setOrigin(0.5, 1);
      tree.setScale(0.85);
      const body = obstacles.create(x, y - 8, "") as Phaser.Physics.Arcade.Sprite;
      body.setDisplaySize(20, 16).setVisible(false);
      body.refreshBody();
    });

    // Welcome house near spawn
    this.add.image(tileToWorld(26, 30).x, tileToWorld(26, 30).y - 4, "house")
      .setOrigin(0.5, 1).setDepth(tileToWorld(26, 30).y).setScale(0.9);

    // NPCs
    NPC_DOGS.forEach(npc => {
      const [wx, wy] = npc.position;
      const frame = npc.sprite === "frog" ? "frog/idle/frog-idle-1"
        : npc.sprite === "eagle" ? "eagle/eagle-attack-1"
        : "opossum/opossum-1";

      const sprite = this.add.sprite(wx, wy, "sprites", frame).setDepth(wy + 1);
      if (npc.tint) sprite.setTint(npc.tint);

      this.tweens.add({
        targets: sprite,
        y: wy - 3,
        duration: 900 + Math.random() * 400,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut",
      });

      this.add.image(wx + 14, wy - 18, "sign").setDepth(wy + 2).setScale(1.1);
      this.add.text(wx, wy - 32, npc.name, {
        fontFamily: "Press Start 2P",
        fontSize: "7px",
        color: "#282828",
        backgroundColor: "#f8f8f8",
        padding: { x: 4, y: 3 },
      }).setOrigin(0.5).setDepth(wy + 3);

      this.npcSprites.push({ id: npc.id, sprite });
    });

    // Hidden bone (gem sprite)
    const bonePos = tileToWorld(BONE_TILE[0], BONE_TILE[1]);
    this.bone = this.add.sprite(bonePos.x, bonePos.y - 4, "sprites", "gem/gem-1").setDepth(bonePos.y + 1).setScale(1.4);
    this.tweens.add({ targets: this.bone, angle: 8, duration: 600, yoyo: true, repeat: -1 });

    // Player (Kobe) — Sunnyland hero
    const spawn = tileToWorld(26, 30);
    this.player = this.physics.add.sprite(spawn.x, spawn.y, "sprites", "player/idle/player-idle-1");
    this.player.setDepth(spawn.y + 1);
    this.player.setCollideWorldBounds(true);
    this.player.body!.setSize(14, 18).setOffset(9, 14);

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("sprites", { prefix: "player/idle/player-idle-", start: 1, end: 4 }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNames("sprites", { prefix: "player/run/player-run-", start: 1, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, obstacles);

    this.cursors = this.input.keyboard!.createCursorKeys();
    this.keys = this.input.keyboard!.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
      SHIFT: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    }) as Record<string, Phaser.Input.Keyboard.Key>;

    this.cameras.main.setBounds(0, 0, worldW, worldH);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.physics.world.setBounds(0, 0, worldW, worldH);

    if (!this.sound.get("bgm")) {
      try {
        this.sound.add("bgm", { loop: true, volume: 0.2 }).play();
      } catch { /* autoplay blocked */ }
    }
  }

  update() {
    if (!this.player?.body) return;

    const left  = this.cursors.left.isDown  || this.keys.A.isDown;
    const right = this.cursors.right.isDown || this.keys.D.isDown;
    const up    = this.cursors.up.isDown    || this.keys.W.isDown;
    const down  = this.cursors.down.isDown  || this.keys.S.isDown;
    this.running = this.keys.SHIFT.isDown;

    const speed = this.running ? 130 : 75;
    let vx = 0;
    let vy = 0;
    if (left)  vx = -speed;
    if (right) vx = speed;
    if (up)    vy = -speed;
    if (down)  vy = speed;

    if (vx !== 0 && vy !== 0) {
      vx *= 0.707;
      vy *= 0.707;
    }

    this.player.setVelocity(vx, vy);
    this.player.setDepth(this.player.y);

    const moving = vx !== 0 || vy !== 0;
    if (moving) {
      this.player.anims.play("run", true);
      if (vx < 0) this.player.setFlipX(true);
      else if (vx > 0) this.player.setFlipX(false);
    } else {
      this.player.anims.play("idle", true);
    }

    // NPC proximity
    let nearId: string | null = null;
    let best = TALK_RADIUS;
    for (const { id, sprite } of this.npcSprites) {
      const d = Phaser.Math.Distance.Between(this.player.x, this.player.y, sprite.x, sprite.y);
      if (d < best) { best = d; nearId = id; }
    }
    this.callbacks.onNearNpc(nearId);

    // Bone pickup
    if (this.bone && !this.boneCollected) {
      const d = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.bone.x, this.bone.y);
      if (d < 20) {
        this.boneCollected = true;
        this.bone.destroy();
        this.bone = undefined;
        this.callbacks.onBoneFound();
      }
    }
  }
}
