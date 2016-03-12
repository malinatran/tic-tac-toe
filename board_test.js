var expect = chai.expect;

describe("Board", function() {
  describe("constructor", function() {
    it("should create a board of any size", function() {
      var board = new Board(5);
      expect(board.grid).to.have.length(5);
    });
  });

  describe("#clearBoard", function() {
    it("should reset all square values to null", function() {
      var board = new Board(3).setSquare(0, 0, 'computer').clearBoard();
      for (var i = 0; i < board.getSize(); i++) {
        for (var j = 0; j < board.getSize(); j++) {
          expect(board.isSquareEmpty(i, j)).to.be.true;
        }
      }
    });
  });

  describe("#getSquare", function() {
    it("should return square if square is not taken", function() {
      var square = new Board(3).getSquare(0, 0);
      expect(square).to.be.a('null');
    });
  });

  describe("#isSquareEmpty", function() {
    it("should return true if square is not taken", function() {
      var isSquareEmpty = new Board(3).isSquareEmpty(0, 1);
      expect(isSquareEmpty).to.be.true;
    });
    it("should return false if square is taken", function() {
      var isSquareEmpty = new Board(3).setSquare(0, 1, 'computer').isSquareEmpty(0, 1);
      expect(isSquareEmpty).to.be.false;
    });
  });

  describe("#setSquare", function() {
    it("should set square to player's value", function() {
      var square = new Board().setSquare(0, 0, 'human').getSquare(0, 0);
      expect(square).to.equal('human');
    });
    it("should throw an error if square is taken", function() {
      expect(function() {
        (new Board()).setSquare(0, 1, 'human').setSquare(0, 1, 'human');
      }).to.throw(Error);
    }); 
  });

});