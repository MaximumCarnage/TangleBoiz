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
	this.load.spritesheet('player', 'assets/sprites/MainCharactersprite.png',{ frameWidth: 100, frameHeight: 125 });
	this.load.tilemapCSV('level1', 'assets/maps/Maze1.csv');
	this.load.image('desert_1_0_7', 'assets/tilesets/Mazetiles.png');
}	

gameScene.create = function() {

	let bg = this.add.sprite(0, 0, 'background');
	bg.setScale(2);
	bg.tint = 0x444444;
  	bg.setOrigin(0,0);

	this.player = this.physics.add.sprite(window.innerWidth/2,30 , 'player');

	var map1 = this.make.tilemap({key : 'level1',tileWidth: 32, tileHeight: 32 });
	var tileset = map1.addTilesetImage('desert_1_0_7');
    var layer = map1.createDynamicLayer(0, tileset, 0, 0);
	layer.setScale(2);
	
	//map1.setCollisionBetween(54, 83);

	
	this.cameras.main.setBounds(0, 0, map1.widthInPixels*2, map1.heightInPixels*2);
	this.cameras.main.startFollow(this.player);

	 this.anims.create({
        key: 'Walk',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: -1
    });
}

gameScene.update = function() {

	
	
	this.player.body.setVelocity(0);

	var targetAngle = (360 / (2 * Math.PI)) * Phaser.Math.Angle.Between(
          this.player.x, this.player.y,
          this.input.activePointer.x, this.input.activePointer.y) + 90;
	if(targetAngle < 0)
	{
        targetAngle += 360;
	}

	
	if (this.input.activePointer.isDown) {
    	this.physics.moveTo(this.player, this.input.x + this.cameras.main.scrollX, this.input.y + this.cameras.main.scrollY, null, 1000);
  		this.player.body.rotation = targetAngle;
  		this.player.anims.play('Walk', true);
  	}
  	else{
  		this.player.anims.play('Walk', false);
  	}

  	//this.physics.collide(this.player, this.layer);

  	
}

gameScene.endgame = function(){
	console.log("YouDED");
}

