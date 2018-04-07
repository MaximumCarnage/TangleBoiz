let gameScene = new Phaser.Scene('Game');


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
  scene: gameScene 
};

var game = new Phaser.Game(config);

gameScene.init = function() {
	this.playerSpeed = 1.5;
}

gameScene.preload = function() {
	this.load.image('background', 'assets/images/Desert.png');
	this.load.image('player', 'assets/sprites/MainCharacterstatic.png');
}	

gameScene.create = function() {

	let bg = this.add.sprite(0, 0, 'background');
	bg.tint = 0x444444;
  	bg.setOrigin(0,0);
	this.player = this.physics.add.sprite(30,40 , 'player');
}

gameScene.update = function() {
	if (this.input.activePointer.isDown) {
    	this.physics.moveTo(this.player, this.input.x + this.cameras.main.scrollX, this.input.y + this.cameras.main.scrollY, null, 1000);

  	}
  	else if(this.input.activePointer.isUp){
  		this.player.velocity = 0;
  	}
}

