import { useState, useEffect } from "react";

const HomePage = () => {
	const [gameState, setState] = useState({
		status: "Playing",
		currentTurn: "X",
		isGameOver: false,
		gameWinner: "",
		players: {
			human: "X",
			computer: "O",
		},
		boardState: {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
		},
	});

	const handleCheckWin = () => {
		const possibilities = [
			[0, 1, 2],
			[8, 4, 0],
			[0, 5, 9],
			[3, 4, 5],
			[1, 4, 7],
			[2, 5, 8],
			[2, 4, 6],
			[2, 1, 0],
			[6, 7, 8],
			[0, 3, 6],
		];
		const { boardState } = gameState;
		for (let i = 0; i < possibilities.length; i++) {
			const [a, b, c] = possibilities[i];
			if (
				boardState[a] &&
				boardState[a] === boardState[b] &&
				boardState[a] === boardState[c] &&
				boardState[a] !== "" &&
				boardState[b] !== "" &&
				boardState[c] !== ""
			) {
				setState({
					...gameState,
					isGameOver: true,
					status: `${boardState[a]} is the winner!`,
				});
				return boardState[a];
			}
		}
	};

	useEffect(() => {
		const winner = handleCheckWin();
		setState({
			...gameState,
			gameWinner: winner,
		});
		for (let i = 0; i < Object.values(gameState.boardState).length; i++) {
			const element = Object.values(gameState.boardState)[i];
			if (element === "") {
				return;
			} else if (i === 8) {
				setState({
					...gameState,
					isGameOver: true,
					status: "Draw",
				});
			}
		}
	});

	const handleTurnChange = () => {
		setState((gameStateVals) => ({
			...gameStateVals,
			currentTurn:
				gameStateVals.currentTurn === gameState.players.human
					? gameState.players.computer
					: gameState.players.human,
		}));
	};

	const handleTurnUse = (e) => {
		if (e.target.innerText === "") {
			setState((gameStateVals) => ({
				...gameStateVals,
				boardState: {
					...gameStateVals.boardState,
					[e.target.id]: gameStateVals.currentTurn,
				},
			}));
			if (!gameState.isGameOver) {
				handleTurnChange();
			}
		} else {
			return;
		}
	};

	const handleOnClick = (e) => {
		e.preventDefault();
		if (!gameState.isGameOver) {
			handleTurnUse(e);
		} else {
			alert("Game is over!");
		}
	};

	// const minimax = (board, player) => {
	// 	const availableSpots = Object.keys(board).filter(
	// 		(key) => board[key] === ""
	// 	);
	// 	if (checkWin(board, "X")) {
	// 		return 1;
	// 	} else if (checkWin(board, "O")) {
	// 		return -1;
	// 	} else if (availableSpots.length === 0) {
	// 		return 0;
	// 	}

	// 	let moves = [];
	// 	for (let i = 0; i < availableSpots.length; i++) {
	// 		let move = {};
	// 		move.index = board.indexOf(availableSpots[i]);
	// 		board[move.index] = player;
	// 		if (player === "O") {
	// 			move.score = minimax(board, "X");
	// 		} else {
	// 			move.score = minimax(board, "O");
	// 		}
	// 		board[move.index] = "";
	// 		moves.push(move);
	// 	}
	// 	let bestMove;
	// 	if (player === "O") {
	// 		let bestScore = -10000;
	// 		for (let i = 0; i < moves.length; i++) {
	// 			if (moves[i].score > bestScore) {
	// 				bestScore = moves[i].score;
	// 				bestMove = i;
	// 			}
	// 		}
	// 	} else {
	// 		let bestScore = 10000;
	// 		for (let i = 0; i < moves.length; i++) {
	// 			if (moves[i].score < bestScore) {
	// 				bestScore = moves[i].score;
	// 				bestMove = i;
	// 			}
	// 		}
	// 	}
	// 	return moves[bestMove].index;
	// };

	return (
		<main>
			<h1 className="text-xl text-center md:text-3xl">
				Welcome To Tic Tac Toe
			</h1>
			<div className="nonPlayArea flex justify-center items-center mt-20">
				<div className="statusContainer border-2 w-fit text-xl p-3 text-center">
					<div>
						<strong>Status</strong>: <span>{gameState.status}</span>
					</div>
					{!gameState.isGameOver && (
						<div>
							<strong>Turn</strong>: <span>{gameState.currentTurn}</span>
						</div>
					)}
				</div>
			</div>
			<div className="playArea container mx-auto max-h-fit">
				<div className="boardContainer flex justify-center h-[60vh] items-center">
					<div className="board grid grid-cols-3 h-[30rem] w-[30rem] p-5">
						<div
							id="0"
							onClick={handleOnClick}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[0]}</span>
						</div>
						<div
							id="1"
							onClick={handleOnClick}
							className="box border-2 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[1]}</span>
						</div>
						<div
							id="2"
							onClick={handleOnClick}
							className="box border-2 border-r-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[2]}</span>
						</div>
						<div
							id="3"
							onClick={handleOnClick}
							className="box border-2 border-l-0 text-5xl flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[3]}</span>
						</div>
						<div
							id="4"
							onClick={handleOnClick}
							className="box border-2 text-5xl flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[4]}</span>
						</div>
						<div
							id="5"
							onClick={handleOnClick}
							className="box border-2 text-5xl border-r-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[5]}</span>
						</div>
						<div
							id="6"
							onClick={handleOnClick}
							className="box border-2 text-5xl border-l-0 border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[6]}</span>
						</div>
						<div
							id="7"
							onClick={handleOnClick}
							className="box border-2 text-5xl border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[7]}</span>
						</div>
						<div
							id="8"
							onClick={handleOnClick}
							className="box border-2 text-5xl border-r-0 border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[8]}</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
