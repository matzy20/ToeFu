//class constructor
//responsible for ..
//preloading assets
//and switching to the game state

ToeFu.Boot = function(){

};

ToeFu.Boot.prototype.preload = function() {
  //will preload all assests

  //autoload each asset by type using functional programming vs
  //copying pasting every output

  Object.keys(ToeFu.ASSETS).forEach(function(type){
    for (var asset in ToeFu.ASSETS[type]){
      ToeFu.game.load[ type.toLowerCase() ](
        ToeFu.ASSETS[type][ asset ].name,
        ToeFu.ASSETS[type][ asset ].path,
        ToeFu.ASSETS[type][ asset ].width,
        ToeFu.ASSETS[type][ asset ].height,
        ToeFu.ASSETS[type][ asset ].frames
      );
    }
  });

};

ToeFu.Boot.prototype.create = function() {
  //switch to game state
  this.state.start(ToeFu.STATES.GAME);
};