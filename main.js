$(function() {
  var moveMadeCallback = function(x, y, identity) {
    $('.square[data-grid-id="' + x + '-' + y +'"]').text(identity);
  };

  var player1 = new ComputerPlayer('X');
  var player2 = new HumanPlayer('O');
  var board = new Board(3);
  var game = new Game(player1, player2, board, moveMadeCallback);

  $('.square').on('click', function() {
    var coordinates = $(this).data('grid-id').split('-');
    var x = parseInt(coordinates[0]);
    var y = parseInt(coordinates[1]);
    player2.makeMove(x, y);
  });

  game.startGame();
});