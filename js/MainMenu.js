  let MainMenu = new Phaser.Scene('MainMenu');

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
  scene: MainMenuScene
};

var game = new Phaser.Game(config);


	var titlescreen;

MainMenuScene.create = function(){

		this.createButton(game, "Play", game.world.centerX, game.world.centerY + 32, 300, 100, 
				function(){
					this.state.start('Level1');
				});

		this.createButton(game, "About", game.world.centerX, game.world.centerY + 182, 300, 100, 
				function(){
					console.log('About');
				});
		titlescreen = game.add.sprite(game.world.centerX,game.world.centerY - 192, 'titlescreen');
		titlescreen.anchor.setTo(0.5, 0.5);
};

	// update:function(game){

	// };

	// createButton:function(game,string,x,y,w,h,callbackl){
	// 	var button1 = game.add.button(x,y, 'button', callback, this, 2, 1, 0);

	// 	button1.anchor.setTo(0.5, 0.5);
	// 	button1.width = w;
	// 	button.height = h;

	// 	var txt = game.add.text(button1.x, button1.y, string, {
	// 		font: "14px Arial",
	// 		fill: "#fff",
	// 		align: "center"
	// 	});
	// 	txt.anchor.setTo(0.5, 0.5);
	// }
