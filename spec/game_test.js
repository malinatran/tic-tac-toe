var expect = chai.expect;
var Game = TicTacToe.Game;

describe('Game', function() {
  describe('#startGame', function() {
    it('should ask for first player\'s move', function() {
      var game = new Game(new ComputerPlayer('X'), new HumanPlayer('O'), new Board(3));
      game.requestMove = chai.spy();
      expect(game.requestMove).to.have.been.called;
    });
  });

  describe('#requestMove', function() {
    it('should request a move from player', function() {
      var player = new HumanPlayer('X');
      player.requestMove = chai.spy();
      var game = new Game(player, new HumanPlayer('O'), new Board(3));
      game.requestMove(player, 'O');
      expect(player.requestMove).to.have.been.called;
    });
  });

  describe('#makeMove', function() {
    it('should run callback after receiving player\'s move', function() {
      var player = new HumanPlayer('X');
      var spy = chai.spy();
      player.requestMove(spy).makeMove(1, 2);
      expect(spy).to.have.been.called.with.exactly(1, 2);
    }); 
  });

  describe('#setMoveMadeCallback', function() {
    it('should set the callback to be fired after move is made', function() {
      var game = new Game(
        new ComputerPlayer('X'),
        new HumanPlayer('O'),
        new Board(3)
      );
      var spy = chai.spy();
      game.setMoveMadeCallback(spy);
      expect(game.moveMadeCallback).to.equal(spy);
    });
  });

  describe('#setGameWonCallback', function() {
    it('should set the callback to be fired after game is won', function() {
      var game = new Game(
        new ComputerPlayer('X'),
        new HumanPlayer('O'),
        new Board(3)
      );
      var spy = chai.spy();
      game.setGameWonCallback(spy);
      expect(game.gameWonCallback).to.equal(spy);
    });
  });

  describe('#setGameTiedCallback', function() {
    it('should set the callback to be fired after game is tied', function() {
      var game = new Game(
        new ComputerPlayer('X'),
        new HumanPlayer('O'),
        new Board(3)
      );
      var spy = chai.spy();
      game.setGameTiedCallback(spy);
      expect(game.gameTiedCallback).to.equal(spy);
    });
  });

  describe('#didPlayerWin', function() {
    it('should return false if no player has won', function() {
      var board = new Board(3);
      var player = new HumanPlayer('O');
      var game = new Game(
        new ComputerPlayer('X'),
        player,
        board
      );
      expect(game.didPlayerWin(player, 1, 1)).to.be.false;
    });
    it('should return true if a player has won', function() {
      var board = new Board(3);
      board.grid = [
        ['X', null, null],
        [null, 'X', null],
        [null, null, 'X']
      ];
      var player = new HumanPlayer('X');
      var game = new Game(
        new ComputerPlayer('O'),
        player,
        board
      );
      expect(game.didPlayerWin(player, 1, 1)).to.be.true;
    });
  });

});