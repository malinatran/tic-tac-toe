var expect = chai.expect;
var HumanPlayer = TicTacToe.HumanPlayer;

describe('HumanPlayer', function() {
  describe('constructor', function() {
    it('should set the human player\'s identity', function() {
      var identity = new HumanPlayer('O').identity;
      expect(identity).to.equal('O');
    });
  });

  describe('#getIdentity', function() {
    it('should get the human player\'s identity', function() {
      var identity = new HumanPlayer('O').getIdentity();
      expect(identity).to.equal('O');
    });
  });

  describe('#requestMove', function() {
    it('should set the callback which is to be fired after player makes move', function() {
      var player = new HumanPlayer();
      var spy = chai.spy();
      player.requestMove(spy);
      expect(player.makeMoveCallback).to.equal(spy);
    });
  });

  describe('#makeMove', function() {
    it('should call the `makeMove` callback function', function() {
      var player = new HumanPlayer();
      var spy = chai.spy();
      player.requestMove(spy).makeMove(1, 1);
      expect(spy).to.have.been.called.with.exactly(1, 1);
    });
  });
});