//class constructor
//responsible for ..
//preloading assets
//and switching to the game state

ToeFu.Boot = function(){

};

ToeFu.Boot.prototype.preload = function() {
  //will preload all assests

};

ToeFu.Boot.prototype.create = function() {
  //switch to game state
  this.state.start(ToeFu.STATES.GAME);
};