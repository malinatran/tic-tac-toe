var TicTacToe = TicTacToe || {};

(function(exports) {
  'use strict';

  var Board = function(size) {
    this.size = size || 3;
    this.grid = [];
    for (var i = 0; i < this.size; i++) {
      this.grid.push([]);
      for (var j = 0; j < this.size; j++) {
        this.grid[i].push(null);
      }
    }
  }
  exports.Board = Board;

  Board.prototype = {
    getCopy: function() {
      var board = new Board(this.getSize());
      board.grid = JSON.parse(JSON.stringify(this.grid));
      return board;
    },

    traverseBoard: function(callback) {
      for (var i = 0; i < this.getSize(); i++) {
        for (var j = 0; j < this.getSize(); j++) {
          callback(i, j);
        }
      }
    },

    getEmptySquares: function() {
      var emptySquares = [];
      this.traverseBoard(function(x, y) {
        if (this.isSquareEmpty(x, y)) {
          emptySquares.push({ x: x, y: y });
        }
      }.bind(this)); 
      return emptySquares;
    },

    clearBoard: function() {
      this.traverseBoard(this.clearSquare.bind(this));
      return this;
    },

    getSquare: function(x, y) {
      return this.grid[x][y];
    },

    setSquare: function(x, y, identity) {
      if (this.isSquareEmpty(x, y)) {
        this.grid[x][y] = identity;
      } else {
        throw new Error("already chosen");
      }
      return this;
    },

    isSquareEmpty: function(x, y) {
      return (this.grid[x][y] === null) ? true : false;
    },

    getSize: function() {
      return this.size;
    },

    isRowFilledWith: function(y, identity) {
      for (var i = 0; i < this.getSize(); i++) {
        if (this.getSquare(i, y) !== identity) {
          return false;
        } 
      }
      return true;
    },

    isColFilledWith: function(x, identity) {
      for (var i = 0; i < this.getSize(); i++) {
        if (this.getSquare(x, i) !== identity) {
          return false;
        } 
      }
      return true;
    },

    isDiagonalFilledWith: function(identity) {
      return this.isForwardDiagonalFilledWith(identity)
          || this.isBackwardDiagonalFilledWith(identity);
    },

    isForwardDiagonalFilledWith: function(identity) {
      for (var i = 0; i < this.getSize(); i++) {
        if (this.getSquare(i, i) !== identity) {
          return false;
        }
      } 
      return true;
    },
      
    isBackwardDiagonalFilledWith: function(identity) {
      var size = this.getSize();
      for (var i = 0; i < size; i++) {
        if (this.getSquare(i, size - 1 - i) !== identity) {
          return false;
        }
      }
      return true;
    },

    isFilled: function() {
      return this.getEmptySquares().length === 0;
    },

    clearSquare: function(x, y) {
      this.grid[x][y] = null;
      return this;
    }
  }

})(TicTacToe);