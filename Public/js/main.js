//create a single global variable

window.ToeFu = {
  //initialize some settings
  //create main topic to stick some statics in, and stage settings
  //using CAPS because there constants, where they don't change
  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STATE_ID : 'game' , //the div in index.html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }
};
//load Phaser on window load
window.onload = function() {
  ToeFu.game = new Phaser.Game(ToeFu.STAGE.WIDTH, ToeFu.STAGE.HEIGHT, Phaser.AUTO, ToeFu.STATE_ID);
  ToeFu.game.state.add (ToeFu.STATES.BOOT, ToeFu.Boot);
  ToeFu.game.state.add (ToeFu.STATES.GAME, ToeFu.Game);
  ToeFu.game.state.start(ToeFu.STATES.BOOT);
};
