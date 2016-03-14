var expect = chai.expect;
var Board = TicTacToe.Board;

describe('Board', function() {
  describe('constructor', function() {
    it('should create a board of any size', function() {
      var board = new Board(5);
      expect(board.grid).to.have.length(5);
    });
  });

  describe('#getEmptySquares', function() {
    it('should return all squares that are not selected', function() {
      var squares = new Board(3).setSquare(0, 0, 'X')
                                .setSquare(0, 1, 'O')
                                .setSquare(1, 1, 'O')
                                .setSquare(1, 2, 'X')
                                .setSquare(2, 0, 'X')
                                .getEmptySquares();
      expect(squares).to.eql([{x: 0, y: 2},
                               {x: 1, y: 0},
                               {x: 2, y: 1},
                               {x: 2, y: 2}]);
    });
  });

  describe('#clearBoard', function() {
    it('should reset all square values to null', function() {
      var board = new Board(3).setSquare(0, 0, 'X').clearBoard();
      for (var i = 0; i < board.getSize(); i++) {
        for (var j = 0; j < board.getSize(); j++) {
          expect(board.isSquareEmpty(i, j)).to.be.true;
        }
      }
    });
  });

  describe('#getSquare', function() {
    it('should return square if square has not been selected', function() {
      var square = new Board(3).getSquare(0, 0);
      expect(square).to.be.null;
    });
  });

  describe('#setSquare', function() {
    it('should set square to player\'s value', function() {
      var square = new Board().setSquare(0, 0, 'X').getSquare(0, 0);
      expect(square).to.equal('X');
    });
    it('should throw an error if square has already been selected', function() {
      expect(function() {
        (new Board()).setSquare(0, 1, 'X').setSquare(0, 1, 'O');
      }).to.throw(Error);
    }); 
  });

  describe('#isSquareEmpty', function() {
    it('should return true if square has not been selected', function() {
      var isSquareEmpty = new Board(3).isSquareEmpty(0, 1);
      expect(isSquareEmpty).to.be.true;
    });
    it('should return false if square has not been selected', function() {
      var isSquareEmpty = new Board(3).setSquare(0, 1, 'O').isSquareEmpty(0, 1);
      expect(isSquareEmpty).to.be.false;
    });
  });

  describe('#getSize', function() {
    it('should return length of board', function() {
      var size = new Board(7).getSize();
      expect(size).to.equal(7);
    });
  });

  describe('#isRowFilledWith', function() {
    it('should return true if row is filled with same player\'s identity', function() {
      var board = new Board(3).setSquare(0, 0, 'X')
                              .setSquare(1, 0, 'X')
                              .setSquare(2, 0, 'X')
                              .isRowFilledWith(0, 'X');
      expect(board).to.be.true;
    });
    it('should return false if row is not filled with same identity', function() {
      var board = new Board(3).setSquare(0, 0, 'X')
                              .setSquare(1, 0, 'O')
                              .setSquare(2, 0, 'X')
                              .isRowFilledWith(0, 'X');
      expect(board).to.be.false;
    });
  });

  describe('#isColFilledWith', function() {
    it('should return true if column is filled with same player\'s identity', function() {
      var board = new Board(3).setSquare(0, 0, 'X')
                              .setSquare(0, 1, 'X')
                              .setSquare(0, 2, 'X')
                              .isColFilledWith(0, 'X');
      expect(board).to.be.true;
    });
    it('should return false if column is not filled with same identity', function() {
      var board = new Board(3).setSquare(0, 0, 'O')
                              .setSquare(0, 1, 'X')
                              .setSquare(0, 2, 'O')
                              .isColFilledWith(0, 'X');
      expect(board).to.be.false;
    });
  });

  describe('#isDiagonalFilledWith', function() {
    it('should return true if either diagonal is filled with same player\'s identity', function() {
      var board = new Board(3).setSquare(0, 0, 'O')
                              .setSquare(1, 1, 'O')
                              .setSquare(2, 2, 'O')
                              .isDiagonalFilledWith('O');
      expect(board).to.be.true;
    });
     it('should return false if either diagonal is or both diagonals are not filled with same identity', function() {
        var board = new Board(3).setSquare(0, 0, 'O')
                                .setSquare(1, 1, 'X')
                                .setSquare(2, 2, 'O')
                                .setSquare(0, 2, 'O')
                                .setSquare(2, 0, 'X')
                                .isDiagonalFilledWith('O');
        expect(board).to.be.false;
    });
  });

  describe('#isFilled', function() {
    it('should return false if board is not filled', function() {
      var isBoardFilled = new Board(3).setSquare(0, 0, 'O').isFilled();
      expect(isBoardFilled).to.be.false;
    });

    it('should return true if board is filled', function() {
      var isBoardFilled = new Board(2).setSquare(0, 0, 'X').setSquare(0, 1, 'O').setSquare(1, 0, 'X').setSquare(1, 1, 'O').isFilled();
      expect(isBoardFilled).to.be.true;
    });
  });

  describe('#clearSquare', function() {
    it('should set square back to null', function() {
      var square = new Board(3).setSquare(0, 0, 'X').clearSquare(0, 0).getSquare(0, 0);
      expect(square).to.be.null;
    });
  });

});