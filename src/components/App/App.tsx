import { FC } from "react";
import "../../scss/index.scss";
import { Banner, Footer, Header, Info, Offers } from "../index";

const App: FC = (): JSX.Element => {
	return (
		<div className="App">
			<Header />
			<Banner />
			<main>
				<Offers />
				<Info />
			</main>
			<Footer />
		</div>
	);
};

export default App;
