(function(exports) {
  'use strict';

  function Board(size) {
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
    clearBoard: function() {
      for (var i = 0; i < this.getSize(); i++) {
        for (var j = 0; j < this.getSize(); j++) {
          this.grid[i][j] = null;
        }
      } 
      return this;
    },

    getSquare: function(x, y) {
      return this.grid[x][y];
    },

    setSquare: function(x, y, player) {
      if (this.isSquareEmpty(x, y)) {
        this.grid[x][y] = player;
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
    }
  }

})(this);