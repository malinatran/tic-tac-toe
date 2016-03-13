(function(exports) {
  'use strict';

  function HumanPlayer(identity) {
    this.identity = identity;
  }
  exports.HumanPlayer = HumanPlayer;

  HumanPlayer.prototype = {
    getIdentity: function() {
      return this.identity;
    },
    requestMove: function(callback) {
      this.makeMoveCallback = callback;
      return this;
    },
    makeMove: function(x, y) {
      this.makeMoveCallback(x, y);
      return this;
    }
  }

})(this);