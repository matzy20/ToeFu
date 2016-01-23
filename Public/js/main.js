//create a single global variable

window.Toefu = {
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