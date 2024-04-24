import { FC } from "react";
import {ReactComponent as Rocket} from "./assets/Rocket.svg";

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<div className="footer__content">
				<Rocket />
				<p>Exciting space adventure!</p>
			</div>
		</footer>
	);
};
