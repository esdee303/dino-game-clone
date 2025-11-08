
import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

export const PRELOAD_CONFIG = {
  cactusesCount: 6
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  pixelArt: true,
  transparent: true,
  width: 1000,
  height: 340,
  physics: {
    
    default: 'arcade',
    arcade: {
      debug: true,
  //    gravity: { y: 200 }
    }
  },
  scene:[PreloadScene, PlayScene],
  
};

new Phaser.Game(config);