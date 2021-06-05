# Web Bingo Game

This Web Bingo game was created as a way to get comfortable with JS

There are different game types available at this point:
* **Original** - your regular bingo game where the game finishes when a column is full
* **H-Bingo** - the game ends when an H-pattern has been filled with the chips
	* The B and O column have been filled.
	* The third row of I, N, and G have been filled
* **L-Bingo** - the game ends when the B column has been filled, along with the bottom row
* **Z-Bingo** - the game ends when the top and bottom row have been filled
	* The cell at column G, row 2 has been filled
	* The cell at column N, row 3 has been filled
	* The cell at column I, row 4 has been filled
* **N-Bingo** - the game end when the B and O column have been filled
	* The cell at column I, row 2 has been filled
	* The cell at column N, row 3 has been filled
	* The cell at column G, row 4 has been filled

I took into consideration the repetition of numbers that can occur as random numbers get generated in order to fill the board. This gets handled on the **randomNumberGenerator** function found on the *script.js* file

The same method was used when the balls are drawn, in order to prevent the repetition of a play. As a ball can not be drawn more than once. That can be found on the **getPlay()** function on the *script.js* file

Overall, it was a fun little project to make. If you find any mistakes on the code, please feel free to reach out to me (carazasluis@gmail.com) as I am getting comfortable with JS