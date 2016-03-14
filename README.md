## Tic Tac Toe v2
Malina Tran

### Objectives
* Build a user-friendly tic tac toe game that allows for a human player and undefeated AI
* Employ object-oriented principles to allow for flexibility and scaling
* Integrate unit testing 

### Approach
*v2*
Based on feedback received, I revamped the game's entire codebase to incorporate OOP and TDD. I made the code more expressive, more modular, and less redundant. Additionally, I created a `TicTacToe` namespace. I've created four classes under this namespace – `Board`, `HumanPlayer`, `ComputerPlayer`, and `Game` – and wrote corresponding tests for each function belonging to these classes. These can be viewed under the "spec" folder, and can be run by opening `test.html`. For testing, I used Mocha and Chai.

To run the game, simply open `index.html`. I have added a timeout to the computer's moves to make it seem more "human." To watch two computers play against each other on a 5x5 board, open `computers.html`.

*v1*
Upon identifying the basic strategies of tic tac toe, I set up the game to allow the AI to always start first, select the center square, and subsequently select one of the four corners of board game. The game logic is as follows: the AI's goals are to identify opportunities for a win (three in a row), to block the human player from achieving a possible win, and to make a strategic move based on the game's progression.