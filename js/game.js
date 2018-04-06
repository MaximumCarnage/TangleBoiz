let gameScene = new Phaser.Scene('Game');


let config = {
  type: Phaser.Canvas,  
  width: window.innerWidth * window.devicePixelRatio, 
  height: window.innerHeight * window.devicePixelRatio, 
  scene: gameScene 
};

let game = new Phaser.Game(config);