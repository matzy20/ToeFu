//sprite class constructor
//@id is 0 index based
ToeFu.Player = function(game, id, name) {
  this.game = game;
  this.id = id;
  //name is optional, so question mark = 'if'
  this.name = name? name : 'Player '+(id+1);

  Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);
};
//extend the Sprite prototype
ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value: ToeFu.Player
  }
});