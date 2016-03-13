(function(exports) {
  'use strict';

  function Game(player1, player2, board, moveMadeCallback) {
   this.board = board;
   this.player1 = player1;
   this.player2 = player2;
   this.moveMadeCallback = moveMadeCallback;
  }
  exports.Game = Game;

  Game.prototype = {
    startGame: function() {
      this.requestMove(this.player1);
    },

    requestMove: function(player, opponentIdentity) {
      var makeMoveCallback = function(x, y) {
        this.makeMove(player, x, y);
      }.bind(this);

      player.requestMove(makeMoveCallback, this.board.getCopy(), opponentIdentity);
    },

    makeMove: function(player, x, y) {
      this.board.setSquare(x, y, player.getIdentity());
      this.moveMadeCallback(x, y, player.getIdentity());

      if (player === this.player1) {
        this.requestMove(this.player2, this.player1.getIdentity());
      } else {
        this.requestMove(this.player1, this.player2.getIdentity());
      }
    },

    isGameOver: function() {
      return false;
    },

    announceWinner: function() {

    }
  }

})(this);