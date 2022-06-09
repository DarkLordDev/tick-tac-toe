import { useState, useEffect } from "react";

const HomePage = () => {
	const [gameState, setState] = useState({
		status: "Playing",
		currentTurn: "X",
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
		for (let i = 0; i < Object.keys(gameState.boardState).length; i++) {
			const element = gameState.boardState[i];
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
		}
	};

	// const minimax = () => {};

	// const handleCheckWin = () => {
	// 	const possibilities = [
	// 		[0, 1, 2],
	// 		[0, 4, 7],
	// 		[0, 5, 9],
	// 		[2, 5, 8],

	// 	];
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
							<span className="piece">{gameState.boardState[0]}</span>
						</div>
						<div
							id="1"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[1]}</span>
						</div>
						<div
							id="2"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[2]}</span>
						</div>
						<div
							id="3"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[3]}</span>
						</div>
						<div
							id="4"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[4]}</span>
						</div>
						<div
							id="5"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[5]}</span>
						</div>
						<div
							id="6"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[6]}</span>
						</div>
						<div
							id="7"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[7]}</span>
						</div>
						<div
							id="8"
							onClick={handleTurnUse}
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece">{gameState.boardState[8]}</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
