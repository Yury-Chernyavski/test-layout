import { FC } from "react";
import { Navbar } from "../index";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import "../../scss/index.scss";

export const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<a href="#">
					<Logo className="logo" />
				</a>
				<Navbar />
			</div>
		</header>
	);
};
