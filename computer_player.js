(function(exports) {
  'use strict';

  function ComputerPlayer(identity) {
    this.identity = identity;
  }
  exports.ComputerPlayer = ComputerPlayer;

  ComputerPlayer.prototype = {
    getIdentity: function() {
      return this.identity;
    },

    requestMove: function(makeMoveCallback, board, opponentIdentity) {
      var centerMove = this.getCenterMove(board);
      if (board.isSquareEmpty(centerMove.x, centerMove.y)) {
        makeMoveCallback(centerMove.x, centerMove.y);
        return this;
      }

      var winningMove = this.getWinningMove(board, this.getIdentity());
      if (winningMove !== null) {
        makeMoveCallback(winningMove.x, winningMove.y);
        return this;
      }

      var blockingMove = this.getWinningMove(board, opponentIdentity);
      if (blockingMove !== null) {
        makeMoveCallback(blockingMove.x, blockingMove.y);
        return this;
      }

      var cornerMove = this.getCornerMove(board);
      if (cornerMove !== null) {
        makeMoveCallback(cornerMove.x, cornerMove.y);
        return this;
      }

      var randomMove = this.getRandomMove(board.getEmptySquares());
      makeMoveCallback(randomMove.x, randomMove.y);
      return this;
    },

    getCenterMove: function(board) {
      var middle = Math.floor(board.getSize() / 2);
      return { x: middle, y: middle };
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
})(this);