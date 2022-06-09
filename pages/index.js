import { useState, useEffect } from "react";

const HomePage = () => {
	const [gameState, setState] = useState({
		status: "Playing",
		currentTurn: "X",
		isGamesOver: false,
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
			[0, 4, 7],
			[0, 5, 9],
			[3, 4, 5],
			[1, 4, 7],
			[2, 5, 8],
			[2, 4, 6],
			[2, 1, 0],
			[6, 7, 8],
		];
		const boxTextValues = gameState.boardState;
		possibilities.forEach((location) => {
			const condition =
				boxTextValues[location[0]] === boxTextValues[location[1]] &&
				boxTextValues[location[2]] === boxTextValues[location[1]] &&
				boxTextValues[location[0]] !== "" &&
				boxTextValues[location[1]] !== "" &&
				boxTextValues[location[2]] !== "";

			if (condition) {
				setState((gameStateVals) => ({
					...gameStateVals,
					isGamesOver: true,
				}));
			}
		});
	};

	const handleChange = (turn) => {
		turn === "X" ? "O" : "X";
		setState((gameStateVals) => ({
			...gameStateVals,
			currentTurn: turn === "X" ? "O" : "X",
		}));
		return turn;
	};

	const handleTurnUse = (e) => {
		e.preventDefault();
		if (e.target.innerText === "") {
			const turn = handleChange(gameState.currentTurn);
			setState((gameStateVals) => ({
				...gameStateVals,
				boardState: {
					...gameStateVals.boardState,
					[e.target.id]: turn,
				},
			}));
		} else {
			return;
		}
	};

	const minimax = () => {};

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
					<div>
						<strong>Turn</strong>: <span>{gameState.currentTurn}</span>
					</div>
				</div>
			</div>
			<div className="playArea container mx-auto max-h-fit">
				<div className="boardContainer flex justify-center h-[60vh] items-center">
					<div className="board grid grid-cols-3 h-[30rem] w-[30rem] p-5">
						<div
							id="0"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[0]}</span>
						</div>
						<div
							id="1"
							onClick={handleTurnUse}
							className="box border-2 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[1]}</span>
						</div>
						<div
							id="2"
							onClick={handleTurnUse}
							className="box border-2 border-r-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[2]}</span>
						</div>
						<div
							id="3"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[3]}</span>
						</div>
						<div
							id="4"
							onClick={handleTurnUse}
							className="box border-2 text-5xl flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[4]}</span>
						</div>
						<div
							id="5"
							onClick={handleTurnUse}
							className="box border-2 text-5xl border-r-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[5]}</span>
						</div>
						<div
							id="6"
							onClick={handleTurnUse}
							className="box border-2 text-5xl border-l-0 border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[6]}</span>
						</div>
						<div
							id="7"
							onClick={handleTurnUse}
							className="box border-2 text-5xl border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute">{gameState.boardState[7]}</span>
						</div>
						<div
							id="8"
							onClick={handleTurnUse}
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
