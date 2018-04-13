
class level1 extends Phaser.Scene{
		constructor(){
			super({key:"level1"});
		}

	init() {
		this.playerSpeed = 1.5;
	}

	preload() {
		this.load.image('background', 'assets/images/Desert.png');
		this.load.spritesheet('player', 'assets/sprites/MainCharactersprite.png',{ frameWidth: 100, frameHeight: 125 });
		this.load.tilemapTiledJSON('map1', 'assets/maps/Maze1.json');
		this.load.image('Tiles', 'assets/tilesets/Mazetiles.png');
		this.load.image('Fog', 'assets/images/Fog.png');
	}	

	create() {

		let bg = this.add.sprite(0, 0, 'background');
		bg.setScale(2);
		bg.tint = 0x444444;
	  	bg.setOrigin(0,0);

		var map1 = this.add.tilemap('map1');
		var tileset = map1.addTilesetImage('Tiles');
	    var layer = map1.createDynamicLayer('Walls', tileset,0,0);

		layer.setScale(2);
		
		layer.setCollisionByExclusion([ -1 ]);

		this.player = this.physics.add.sprite(window.innerWidth/2,30 , 'player');
		this.player.setScale(0.5);

		this.physics.add.collider(this.player, layer);
		
		this.cameras.main.setBounds(0, 0, map1.widthInPixels*2+860, map1.heightInPixels*2+440);
		this.cameras.main.startFollow(this.player);

		 this.anims.create({
	        key: 'Walk',
	        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
	        frameRate: 20,
	        repeat: -1
	    });

		 //this.fog = this.add.sprite(this.player.x, this.player.y, 'Fog');

	}

	update() {
		var targetAngle = (360 / (2 * Math.PI)) * Phaser.Math.Angle.Between(
	          this.player.x, this.player.y,
	          this.input.x, this.input.y)+90 ;

		if(targetAngle < 0) {
	        targetAngle += 360;
		}

		console.log(this.player.anims.frameRate);

		if (this.input.activePointer.isDown ) {
	    	this.physics.moveTo(this.player, this.input.activePointer.x + this.cameras.main.scrollX, this.input.activePointer.y + this.cameras.main.scrollY, 300);
	  		this.player.body.rotation = targetAngle;
	  		this.player.anims.play('Walk', true);
	  	}
	  	else{
	  		this.player.anims.play('Walk', false);
	  		this.player.body.setVelocity(0);
	  	}

	  	// if(this.player.x == this.input.activePointer.x && this.player.y == this.input.activePointer.y ){
	  	// 	this.player.body.setVelocity(0);
	  	// }

	  	
	  	//this.fog.x = this.player.x;
	  	//this.fog.y = this.player.y;
	  	
	}

	losegame(){
		console.log("YouLose");
	}

	winmap1(){
		console.log("YouWin");
	}
}
