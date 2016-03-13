var expect = chai.expect;

describe("ComputerPlayer", function() {
  describe("constructor", function() {
    it("should set the computer player's identity", function() {
      var identity = new ComputerPlayer().identity;
      expect(identity).to.equal("X");
    });
  });

  describe("#getIdentity", function() {
    it("should get the computer player's identity", function() {
      var identity = new ComputerPlayer().getIdentity();
      expect(identity).to.equal("X");
    });
  });

  describe("#getRandomMove", function() {
    it("should get a random move that has not been selected", function() {
      var emptySquares = new Board(3).setSquare(0, 0, 'X')
                                    .setSquare(0, 1, 'O')
                                    .setSquare(1, 1, 'O')
                                    .setSquare(1, 2, 'X')
                                    .setSquare(2, 0, 'X').getEmptySquares();
      var move = new ComputerPlayer().getRandomMove(emptySquares);
      expect(emptySquares).to.include({ x: move.x, y: move.y });
    });
  });
});