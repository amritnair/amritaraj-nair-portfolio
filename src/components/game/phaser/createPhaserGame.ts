import Phaser from "phaser";
import { PortfolioScene, type GameCallbacks } from "./PortfolioScene";

const GAME_W = 480;
const GAME_H = 270;

export function createPhaserGame(parent: HTMLElement, callbacks: GameCallbacks): Phaser.Game {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: GAME_W,
    height: GAME_H,
    backgroundColor: "#68b8e8",
    pixelArt: true,
    roundPixels: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: { gravity: { x: 0, y: 0 }, debug: false },
    },
    scene: PortfolioScene,
  });
  game.scene.start("PortfolioScene", callbacks);
  return game;
}
