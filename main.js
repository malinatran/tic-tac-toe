$(function() {
  var TicTacToe = window.TicTacToe || {};
  var $squares = $('.square');
  var $messageBoard = $('#message-board');

  var moveMadeCallback = function(x, y, identity) {
    $('.square[data-grid-id="' + x + '-' + y +'"]').text(identity);
  };

  var gameWonCallback = function(winner) {
    $messageBoard.text('Game over! ' + winner.getIdentity() + ' wins.');
    $squares.off('click');
  };

  var gameTiedCallback = function() {
    $messageBoard.text('Game tied!');
    $squares.off('click');
  };

  var startGame = function() {
    var player1 = new TicTacToe.ComputerPlayer('X');
    var player2 = new TicTacToe.HumanPlayer('O');

    var board = new TicTacToe.Board(3);
    var game = new TicTacToe.Game(player1, player2, board);

    game.setMoveMadeCallback(moveMadeCallback);
    game.setGameWonCallback(gameWonCallback);
    game.setGameTiedCallback(gameTiedCallback);

    $squares.text('').on('click', function() {
      var coordinates = $(this).data('grid-id').split('-');
      var x = parseInt(coordinates[0]);
      var y = parseInt(coordinates[1]);
      player2.makeMove(x, y);
    });

    $messageBoard.text('');
    game.startGame();
  };

  $('#start-button').add('#reset-button').on('click', function() {
    $('#reset-button').show();
    $('#start-button').hide();
    startGame();
  });
});