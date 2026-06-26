import Phaser from "phaser";
import { NPC_DOGS, REGIONS } from "../narrative";
import { MAP_H, MAP_W, OBSTACLES, T, TILE, tileToWorld } from "../mapData";

const BASE = import.meta.env.BASE_URL;
const TALK_RADIUS = 48;

export interface GameCallbacks {
  onNearNpc: (id: string | null) => void;
}

const REGION_TILES: Record<string, number[]> = {
  barkwood:   [T.GRASS, T.GRASS2],
  aggie:      [T.DIRT, T.PATH3],
  innovation: [T.PATH, T.PATH2],
  healing:    [T.GRASS3, T.GRASS4],
  discovery:  [T.GRASS2, T.GRASS3],
  workshop:   [T.PATH3, T.DIRT],
  hackathon:  [T.PATH2, T.PATH],
  downtown:   [T.GRASS4, T.GRASS],
};

export class PortfolioScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys!: Record<string, Phaser.Input.Keyboard.Key>;
  private callbacks!: GameCallbacks;
  private npcSprites: { id: string; sprite: Phaser.GameObjects.Sprite }[] = [];
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
    this.load.atlas("sprites", `${BASE}sunnyland/atlas/atlas.png`, `${BASE}sunnyland/atlas/atlas.json`);
    this.load.audio("bgm", `${BASE}sunnyland/sound/platformer_level03_loop.ogg`);
  }

  create() {
    this.textures.get("tileset").setFilter(Phaser.Textures.FilterMode.NEAREST);
    this.textures.get("sprites").setFilter(Phaser.Textures.FilterMode.NEAREST);

    const worldW = MAP_W * TILE;
    const worldH = MAP_H * TILE;

    this.add.tileSprite(worldW / 2, worldH / 2 - 40, worldW + 200, worldH, "bg-back").setScrollFactor(0.2).setDepth(-10).setDisplaySize(worldW + 200, 180);
    this.add.tileSprite(worldW / 2, worldH / 2, worldW + 100, worldH, "bg-mid").setScrollFactor(0.35).setDepth(-9).setDisplaySize(worldW + 100, 120);

    const map = this.make.tilemap({ tileWidth: TILE, tileHeight: TILE, width: MAP_W, height: MAP_H });
    const tiles = map.addTilesetImage("tileset", "tileset", TILE, TILE, 0, 0)!;
    const ground = map.createBlankLayer("ground", tiles, 0, 0)!;

    const defaultGrass = [T.GRASS, T.GRASS2, T.GRASS3, T.GRASS4];
    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        ground.putTileAt(defaultGrass[(x * 3 + y * 7) % defaultGrass.length], x, y);
      }
    }

    // Paint each region with distinct ground feel
    REGIONS.forEach(region => {
      const [x1, y1, x2, y2] = region.bounds;
      const palette = REGION_TILES[region.id] ?? defaultGrass;
      for (let y = y1; y <= y2; y++) {
        for (let x = x1; x <= x2; x++) {
          ground.putTileAt(palette[(x + y) % palette.length], x, y);
        }
      }
    });

    // Connecting paths between regions
    const cx = Math.floor(MAP_W / 2);
    const cy = Math.floor(MAP_H / 2);
    for (let x = 3; x < MAP_W - 3; x++) {
      for (let dy = -1; dy <= 1; dy++) ground.putTileAt(T.PATH, x, cy + dy);
    }
    for (let y = 3; y < MAP_H - 3; y++) {
      for (let dx = -1; dx <= 1; dx++) ground.putTileAt(T.PATH2, cx + dx, y);
    }

    const obstacles = this.physics.add.staticGroup();
    OBSTACLES.forEach(([tx, ty]) => {
      const { x, y } = tileToWorld(tx, ty);
      this.add.image(x, y - 20, "tree").setDepth(y).setOrigin(0.5, 1).setScale(0.85);
      const body = obstacles.create(x, y - 8, "") as Phaser.Physics.Arcade.Sprite;
      body.setDisplaySize(20, 16).setVisible(false);
      body.refreshBody();
    });

    // Region title signs
    REGIONS.forEach(region => {
      const [x1, , x2, y1] = region.bounds;
      const midX = ((x1 + x2) / 2) * TILE + TILE / 2;
      const midY = y1 * TILE - 4;
      this.add.text(midX, midY, region.name, {
        fontFamily: "Press Start 2P",
        fontSize: "6px",
        color: region.accent,
        backgroundColor: "#f8f8f8cc",
        padding: { x: 5, y: 3 },
      }).setOrigin(0.5).setDepth(midY + 100);
      this.add.text(midX, midY + 12, region.subtitle, {
        fontFamily: "Press Start 2P",
        fontSize: "5px",
        color: "#555",
      }).setOrigin(0.5).setDepth(midY + 100);
    });

    // Barkwood home
    const home = tileToWorld(26, 30);
    this.add.image(home.x, home.y - 4, "house").setOrigin(0.5, 1).setDepth(home.y).setScale(0.9);

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

      if (!npc.elder) {
        this.add.image(wx + 14, wy - 18, "sign").setDepth(wy + 2).setScale(1.1);
      }

      this.add.text(wx, wy - 32, npc.name, {
        fontFamily: "Press Start 2P",
        fontSize: "7px",
        color: "#282828",
        backgroundColor: "#f8f8f8",
        padding: { x: 4, y: 3 },
      }).setOrigin(0.5).setDepth(wy + 3);

      this.npcSprites.push({ id: npc.id, sprite });
    });

    // Kobe — white maltipoo (tinted hero, smaller)
    const spawn = tileToWorld(26, 32);
    this.player = this.physics.add.sprite(spawn.x, spawn.y, "sprites", "player/idle/player-idle-1");
    this.player.setTint(0xf6f4f0);
    this.player.setScale(0.82);
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

    try {
      if (!this.sound.get("bgm")) this.sound.add("bgm", { loop: true, volume: 0.18 }).play();
    } catch { /* autoplay blocked */ }
  }

  update() {
    if (!this.player?.body) return;

    const left  = this.cursors.left.isDown  || this.keys.A.isDown;
    const right = this.cursors.right.isDown || this.keys.D.isDown;
    const up    = this.cursors.up.isDown    || this.keys.W.isDown;
    const down  = this.cursors.down.isDown  || this.keys.S.isDown;
    this.running = this.keys.SHIFT.isDown;

    const speed = this.running ? 130 : 78;
    let vx = 0;
    let vy = 0;
    if (left)  vx = -speed;
    if (right) vx = speed;
    if (up)    vy = -speed;
    if (down)  vy = speed;
    if (vx !== 0 && vy !== 0) { vx *= 0.707; vy *= 0.707; }

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

    let nearId: string | null = null;
    let best = TALK_RADIUS;
    for (const { id, sprite } of this.npcSprites) {
      const d = Phaser.Math.Distance.Between(this.player.x, this.player.y, sprite.x, sprite.y);
      if (d < best) { best = d; nearId = id; }
    }
    this.callbacks.onNearNpc(nearId);
  }
}
