 //IIFE wrappging entire player class to allow for
 //private static variable
 (function() {
  var ANIMATIONS = {
    IDLE : {
      name: 'idle',
      frames : [0, 1, 2, 3],
      fps : 5
    }
  };

  //sprite class constructor
  //@id is 0 index based
  ToeFu.Player = function(game, id, name) {
    this.game = game;
    this.id = id;
    //name is optional, so question mark = 'if'
    //since id starts at 0, +1 is important
    this.name = name? name : 'Player '+(id+1);

    //super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);
    //set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);
    //play the initial animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
  };

  //extend the Sprite prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: ToeFu.Player
    }
  });
})();