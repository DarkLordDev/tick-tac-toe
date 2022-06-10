import { useState, useEffect } from "react";

const HomePage = () => {
	return (
		<main>
			<h1 className="text-xl text-center md:text-3xl">
				Welcome To Tic Tac Toe
			</h1>
			<div className="nonPlayArea flex justify-center items-center mt-20">
				<div className="statusContainer border-2 w-fit text-xl p-3 text-center">
					<div>
						<strong>Status</strong>: <span></span>
					</div>
					<div>
						<strong>Turn</strong>: <span></span>
					</div>
				</div>
			</div>
			<div className="playArea container mx-auto max-h-fit">
				<div className="boardContainer flex justify-center h-[60vh] items-center">
					<div className="board grid grid-cols-3 h-[30rem] w-[30rem] p-5">
						<div
							id="0"
							className="box border-2 border-l-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="1"
							className="box border-2 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="2"
							className="box border-2 border-r-0 text-5xl border-t-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="3"
							className="box border-2 border-l-0 text-5xl flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="4"
							className="box border-2 text-5xl flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="5"
							className="box border-2 text-5xl border-r-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="6"
							className="box border-2 text-5xl border-l-0 border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="7"
							className="box border-2 text-5xl border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
						<div
							id="8"
							className="box border-2 text-5xl border-r-0 border-b-0 flex justify-center items-center text-center"
						>
							<span className="piece absolute"></span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
