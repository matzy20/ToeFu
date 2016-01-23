//class constructor
//the Game State handles all sprites

ToeFu.Game = function() {

};

ToeFu.Game.prototype.create = function(){
  //instantiates player and game
  this.player_1 = new ToeFu.Player( this.game, 0 );
  this.game.add.existing(this.player_1);
};

ToeFu.Game.prototype.update = function(){

};

ToeFu.Game.prototype.shutdown = function() {

};

