(function(exports) {
  'use strict';

  function Game(player1, player2, board) {
   this.board = board;
   this.player1 = player1;
   this.player2 = player2;
  }
  exports.Game = Game;

  Game.prototype = {
    startGame: function() {
      this.requestMove(this.player1, this.player2.getIdentity());
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
      
      if (this.didPlayerWin(player, x, y)) {
        this.gameWonCallback(player);
      } else if (this.board.isFilled()) {
        this.gameTiedCallback();
      } else if (player === this.player1) {
        this.requestMove(this.player2, this.player1.getIdentity());
      } else {
        this.requestMove(this.player1, this.player2.getIdentity());
      }
    },

    setMoveMadeCallback: function(moveMadeCallback) {
      this.moveMadeCallback = moveMadeCallback;
    },

    setGameWonCallback: function(gameWonCallback) {
      this.gameWonCallback = gameWonCallback;
    },

    setGameTiedCallback: function(gameTiedCallback) {
      this.gameTiedCallback = gameTiedCallback;
    },

    didPlayerWin: function(player, x, y) {
      return this.board.isRowFilledWith(y, player.getIdentity())
          || this.board.isColFilledWith(x, player.getIdentity())
          || this.board.isDiagonalFilledWith(player.getIdentity());
    }
  }

})(this);