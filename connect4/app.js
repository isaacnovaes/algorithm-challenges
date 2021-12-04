function Connect4() {
	this.firstPlayer = 1;
	this.secondPlayer = 2;
	this.winner = null;
	this.currentPlayer = 1;
	this.won = false;
	this.gameGrid = [
		[0, 0, 0, 0, 0, 0, 0], // row 0
		[0, 0, 0, 0, 0, 0, 0], // row 1
		[0, 0, 0, 0, 0, 0, 0], // row 2
		[0, 0, 0, 0, 0, 0, 0], // row 3
		[0, 0, 0, 0, 0, 0, 0], // row 4
		[0, 0, 0, 0, 0, 0, 0], // row 5
		//column 0, 1, 2, 3, 4, 5, 6
	];
}

Connect4.prototype.play = function (column) {
	if (this.won) return "Game has finished!";
	if (this.gameGrid[0][column] !== 0) return "Column full!";

	let row; // it's the row where the disc will be placed

	// add disc; Disc is placed at the bottom of the gridGame; otherwise place it one row up
	loop: for (let i = 5; i >= 0; i--) {
		if (this.gameGrid[i][column] === 0) {
			this.gameGrid[i][column] = this.currentPlayer;
			row = i;
			break loop;
		}
	}

	// check horizontally if there are 4 discs of the currentPlayer
	if (this.checkFor4Discs(this.gameGrid[row]))
		return `Player ${this.winner} wins!`;

	// check vertically if there are 4 discs of the currentPlayer
	const verticalArray = [...this.gameGrid].map(
		gameGridRow => gameGridRow[column]
	);

	if (this.checkFor4Discs(verticalArray)) return `Player ${this.winner} wins!`;

	// check diagonally (45 degrees) if there are 4 discs of the currentPlayer
	const adjuster = row + column <= 4 ? column : 5 - row;
	let rowToStart = row + adjuster;
	let columnToStart = column - adjuster;

	const diagonalFirst = [];

	while (rowToStart !== -1 && columnToStart !== 7) {
		diagonalFirst.push(this.gameGrid[rowToStart][columnToStart]);
		rowToStart--;
		columnToStart++;
	}
	if (this.checkFor4Discs(diagonalFirst)) return `Player ${this.winner} wins!`;

	const diagonalSecond = [];
	// check diagonally (135 degrees) if there are 4 discs of the currentPlayer
	if (row >= column) {
		let rowToStart = row - column;
		let columnToStart = 0;

		while (rowToStart <= 5) {
			diagonalSecond.push(this.gameGrid[rowToStart][columnToStart]);
			rowToStart++;
			columnToStart++;
		}
	}

	if (column > row) {
		let rowToStart = 0;
		let columnToStart = column - row;

		while (columnToStart <= 6) {
			diagonalSecond.push(this.gameGrid[rowToStart][columnToStart]);
			rowToStart++;
			columnToStart++;
		}
	}
	if (this.checkFor4Discs(diagonalSecond)) return `Player ${this.winner} wins!`;

	// change player
	this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;

	// display player that played
	return `Player ${this.currentPlayer === 1 ? 2 : 1} has a turn`;
};

Connect4.prototype.checkFor4Discs = function (arr) {
	const length = arr.length;

	if (length < 4) return false;

	for (let index = 0; index < length; index++) {
		if ((arr[index] === arr[index + 1] && arr[index + 2]) === arr[index + 3]) {
			if (arr[index] === arr[index + 2] && arr[index] !== 0) {
				// there are 4 equal values that are different than 0
				if (arr[index] === this.firstPlayer) {
					this.winner = this.firstPlayer;
					this.won = true;
					return true;
				} else {
					this.winner = this.secondPlayer;
					this.won = true;
					return true;
				}
			}
		}
	}

	return false;
};


