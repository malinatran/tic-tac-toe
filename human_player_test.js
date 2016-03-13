var expect = chai.expect;

describe("HumanPlayer", function() {
  describe("constructor", function() {
    it("should set the human player's identity", function() {
      var identity = new HumanPlayer().identity;
      expect(identity).to.equal("O");
    });
  });

  describe("#getIdentity", function() {
    it("should get the human player's identity", function() {
      var identity = new HumanPlayer().getIdentity();
      expect(identity).to.equal("O");
    });
  });

  describe("#makeMove", function() {
    it("should call the makeMove callback function", function() {
      var player = new HumanPlayer();
      var spy = chai.spy();
      player.requestMove(spy).makeMove(1, 1);
      expect(spy).to.have.been.called.with.exactly(1, 1);
    });
  });
});