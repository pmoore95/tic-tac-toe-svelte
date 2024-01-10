import { MarkerEnum, type MarkerType } from '$lib/constants';
import type { BoardStore } from '$lib/stores/constants';

export const determineWinner = (board: BoardStore) => {
	//check rows
	for (let i = 0; i < 3; i++) {
		const row = board[i];

		if (row[0] !== null && row[0] === row[1] && row[0] === row[2]) return row[0];
	}
	//check columns
	for (let i = 0; i < 3; i++) {
		if (board[0][i] !== null && board[0][i] === board[1][i] && board[0][i] === board[2][i])
			return board[0][i];
	}

	//check diagnals
	if (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2])
		return board[0][0];
	if (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0])
		return board[0][2];

	return false;
};

// Function to check if a player has won
function checkWinner(board: BoardStore, player: MarkerType) {
	// Check rows, columns, and diagonals for a winning combination
	for (let i = 0; i < 3; i++) {
		if (
			(board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
			(board[0][i] === player && board[1][i] === player && board[2][i] === player)
		) {
			return true;
		}
	}

	if (
		(board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
		(board[0][2] === player && board[1][1] === player && board[2][0] === player)
	) {
		return true;
	}

	return false;
}

// Function to determine the next move
export const determineNextMove = (board: BoardStore, currentPlayer: MarkerType) => {
	// Check for winning moves
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] === null) {
				board[i][j] = currentPlayer;
				if (checkWinner(board, currentPlayer)) {
					return { row: i, col: j };
				}
				board[i][j] = null;
			}
		}
	}

	// Check for opponent's winning moves
	const opponent = currentPlayer === MarkerEnum.CROSS ? MarkerEnum.CIRCLE : MarkerEnum.CROSS;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] === null) {
				board[i][j] = opponent;
				if (checkWinner(board, opponent)) {
					return { row: i, col: j };
				}
				board[i][j] = null;
			}
		}
	}

	// Take the center
	if (board[1][1] === null) {
		return { row: 1, col: 1 };
	}

	// Take corners
	const corners = [
		{ row: 0, col: 0 },
		{ row: 0, col: 2 },
		{ row: 2, col: 0 },
		{ row: 2, col: 2 }
	];
	for (const corner of corners) {
		if (board[corner.row][corner.col] === null) {
			return corner;
		}
	}

	// Take sides
	const sides = [
		{ row: 0, col: 1 },
		{ row: 1, col: 0 },
		{ row: 1, col: 2 },
		{ row: 2, col: 1 }
	];
	for (const side of sides) {
		if (board[side.row][side.col] === null) {
			return side;
		}
	}

	// If the board is full, return null (game is over)
	return null;
};

export const isBoardFull = (board: BoardStore) => {
	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[r].length; c++) {
			if (board[r][c] === null) return false;
		}
	}

	return true;
};
