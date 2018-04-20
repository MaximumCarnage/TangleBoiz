

let config = {
  type: Phaser.Canvas,  
  width: window.innerWidth * window.devicePixelRatio, 
  height: window.innerHeight * window.devicePixelRatio,
   physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
   }, 
  scene: [MainMenu,level1,level2,level3] 
};

var game = new Phaser.Game(config);



