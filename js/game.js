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
	this.load.tilemapTiledJSON('level1', 'assets/maps/Maze1.json');
	this.load.image('desert_1_0_7', 'assets/tilesets/Mazetiles.png');
}	

gameScene.create = function() {

	let bg = this.add.sprite(0, 0, 'background');
	bg.setScale(2);
	bg.tint = 0x444444;
  	bg.setOrigin(0,0);

	this.player = this.physics.add.sprite(window.innerWidth * window.devicePixelRatio,30 , 'player');

	var map1 = this.make.tilemap({key : 'level1'});
	 var tileset = map1.addTilesetImage('desert_1_0_7');
    var layer = map1.createStaticLayer(0, tileset, 0, 0);
	layer.setScale(2);
	layer.setCollisionByProperty({ collides: true });
	//this.physics.add.collider(this.player, this.layer);
	//this.physics.setCollisionMapFromTilemapLayer(layer, { slopeProperty: 'slope' });

	this.cameras.main.startFollow(this.player);
	this.cameras.main.setBounds(0, 0, map1.widthInPixels*2, map1.heightInPixels*2);
}

gameScene.update = function() {
	if (this.input.activePointer.isDown) {
    	this.physics.moveTo(this.player, this.input.x + this.cameras.main.scrollX, this.input.y + this.cameras.main.scrollY, null, 1000);
  	}
}

