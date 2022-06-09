import Head from "next/head";
import "../styles/globals.css";

const Main = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Tick Tac Toe</title>
				<meta
					name="description"
					content="This is the best tic tac toe game out there"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default Main;
