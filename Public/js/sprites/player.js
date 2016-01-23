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
  var FACING_FACTOR = {
  LEFT : -1,
  RIGHT : 1
  };

  function select_sprite_row(player_id) {
    return function(frame_id){
      return frame_id + player_id*ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

  //sprite class constructor
  //@id is 0 index based
  ToeFu.Player = function(game, id, name) {
    this.game = game;
    this.id = id;
    //name is optional, so question mark = 'if'
    //since id starts at 0, +1 is important
    this.name = name? name : 'Player '+(id+1);
    this.facing; //direction that player is facing, in game state updates this

    //super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);
    //set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));
    //set center registration point
    this.anchor = { x : 0.5, y : 0.5};
    //play the initial animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
  };

  //extend the Sprite prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: ToeFu.Player
    }
  });
  //public static variable
  ToeFu.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  ToeFu.Player.prototype.update = function(){

    this.scale.x = FACING_FACTOR[ this.facing];
  };
})();