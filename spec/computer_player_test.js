var expect = chai.expect;
var ComputerPlayer = TicTacToe.ComputerPlayer;

describe('ComputerPlayer', function() {
  describe('constructor', function() {
    it('should set the computer player\'s identity', function() {
      var identity = new ComputerPlayer('X').identity;
      expect(identity).to.equal('X');
    });
  });

  describe('#getIdentity', function() {
    it('should get the computer player\'s identity', function() {
      var identity = new ComputerPlayer('X').getIdentity();
      expect(identity).to.equal('X');
    });
  });

  describe('#getCenterMove', function() {
    it('should get the middle square', function() {
      var board = new Board(3);
      var move = new ComputerPlayer().getCenterMove(board);
      expect(move).to.eql({x: 1, y: 1});
    });
  });

  describe('#getWinningMove', function() {
    it('should return with winning move', function() {
      var board = new Board(3).setSquare(0, 0, 'X')
                                     .setSquare(0, 1, 'O')
                                     .setSquare(0, 2, 'O')
                                     .setSquare(1, 0, 'X')
                                     .setSquare(1, 1, 'O')
                                     .setSquare(1, 2, 'O')
                                     .setSquare(2, 0, 'X')
                                     .setSquare(2, 1, 'X');
      var player = new ComputerPlayer('X');
      expect(player.getWinningMove(board, 'X')).to.eql({x: 2, y : 2});
    });
    it('should return null if there are no winning moves', function() {
      var board = new Board(3).setSquare(0, 0, 'X')
                                     .setSquare(0, 1, 'X')
                                     .setSquare(0, 2, 'O')
                                     .setSquare(1, 0, 'X')
                                     .setSquare(1, 1, 'O')
                                     .setSquare(1, 2, 'X')
                                     .setSquare(2, 0, 'O')
                                     .setSquare(2, 1, 'X');
      var player = new ComputerPlayer('X');
      expect(player.getWinningMove(board, 'X')).to.be.null;
    });
  });

  describe('#getCornerMove', function() {
    it('should get top left square as first corner move', function() {
      var board = new Board(4);
      var move = new ComputerPlayer().getCornerMove(board);
      expect(move).to.eql({x: 0, y: 0});
    });
    it('should get the next available corner move', function() {
      var board = new Board(3).setSquare(0, 0, 'X').setSquare(0, 2, 'O');
      var move = new ComputerPlayer('X').getCornerMove(board);
      expect(move).to.eql({x: 2, y: 0});
    });
    it('should return null if there are no corner moves left', function() {
      var board = new Board(3).setSquare(0, 0, 'X')
                              .setSquare(0, 2, 'O')
                              .setSquare(2, 0, 'X')
                              .setSquare(2, 2, 'O');
      var move = new ComputerPlayer('X').getCornerMove(board);
      expect(move).to.be.null;
    });
  }); 

  describe('#getRandomMove', function() {
    it('should get a random move that has not been selected', function() {
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