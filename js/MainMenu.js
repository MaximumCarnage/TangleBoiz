class MainMenu extends Phaser.Scene{
	constructor(){
			super({key:"MainMenu"});
		}

	preload() {
		this.load.image('background', 'assets/images/tangleBoizTitleScreen.png');
		this.load.image('playIcon', 'assets/images/playIconTangleBoiz.png');
		this.load.image('quitIcon', 'assets/images/quitIconTangleBoiz.png');
	}	

	create(){
		// var titlescreen;

		let bg = this.add.sprite(0, 0, 'background');
		bg.setScale(.5);
	  	bg.setOrigin(0,0);

	  	let sprite = this.add.sprite(2, 0, 'playIcon');
	  	sprite.setScale(.2);
	  	sprite.setOrigin(2,2);
	}


	// update() {

	// }

}
