import { FC } from "react";
import "../../scss/index.scss";
import { Banner, Header, Offers } from "../index";

const App: FC = (): JSX.Element => {
	return (
		<div className="App">
			<Header />
			<Banner />
			<main>
				<Offers />
			</main>
		</div>
	);
};

export default App;
