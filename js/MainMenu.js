class MainMenu extends Phaser.Scene{
	constructor(){
			super({key:"MainMenu"});
		}

	preload() {
		this.load.image('background', 'assets/images/tangleBoizTitleScreen0.png');
		this.load.image('playIcon', 'assets/images/playIconTangleBoiz.png');

	}	

	create(){
		var titlescreen;

		let bg = this.add.sprite(0, 0, 'background');
		bg.width = window.innerWidth * window.devicePixelRatio;
		bg.height = window.innerHeight * window.devicePixelRatio;
		bg.setScale(1.5);
	  	bg.setOrigin(0,  0);

	  	let playbutt = this.add.image(window.innerWidth/2 - 140,window.innerHeight/2+240, 'playIcon');
	  	playbutt.setScale(2);
	  	playbutt.setOrigin(0,0);
	  	playbutt.setInteractive();

	  	this.input.on('gameobjectup', this.clickHandler, this);
	}

	  clickHandler (pointer, button)
    {

        button.input.enabled = false;
        button.setVisible(false);

        this.scene.start('level1');
    }





	// update() {

	// }

}
