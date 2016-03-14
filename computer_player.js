var TicTacToe = TicTacToe || {};

(function(exports) {
  'use strict';

  var ComputerPlayer = function(identity) {
    this.identity = identity;
  }
  exports.ComputerPlayer = ComputerPlayer;

  ComputerPlayer.prototype = {
    getIdentity: function() {
      return this.identity;
    },

    requestMove: function(makeMoveCallback, board, opponentIdentity) {
      var variousMoves = [
        this.getCenterMove(board),
        this.getWinningMove(board, this.getIdentity()),
        this.getWinningMove(board, opponentIdentity),
        this.getCornerMove(board),
        this.getRandomMove(board.getEmptySquares())
      ];
      for (var i = 0; i < variousMoves.length; i++) {
        var move = variousMoves[i];
        if (move !== null) {
          setTimeout(function() {
            makeMoveCallback(move.x, move.y);
          }, 500);
          return this;
        }
      }
    },

    getCenterMove: function(board) {
      var middle = Math.floor(board.getSize() / 2);
      var move = { x: middle, y: middle };
      if (board.isSquareEmpty(move.x, move.y)) {
        return move;
      }
      return null;
    },

    getWinningMove: function(board, identity) {
      var emptySquares = board.getEmptySquares();
      var board = board.getCopy();
      for (var i = 0; i < emptySquares.length; i++) {
        var move = emptySquares[i];
        board.setSquare(move.x, move.y, identity);
        if (board.isRowFilledWith(move.y, identity) ||
            board.isColFilledWith(move.x, identity) ||
            board.isDiagonalFilledWith(identity)
        ) {
          return move;
        }
        board.clearSquare(move.x, move.y);
      }
      return null;
    },

    getCornerMove: function(board) {
      var edge = board.getSize() - 1;
      var corners = [
        { x: 0, y: 0 },
        { x: 0, y: edge },
        { x: edge, y: 0 },
        { x: edge, y: edge }
      ];
      for (var i = 0; i < corners.length; i++) {
        if (board.isSquareEmpty(corners[i].x, corners[i].y)) {
          return { x: corners[i].x, y: corners[i].y };
        };
      }
      return null;
    },

    getRandomMove: function(emptySquares) {
      var randNum = Math.floor(Math.random() * emptySquares.length - 1) + 1;
      return emptySquares[randNum];
    }
  }
})(TicTacToe);