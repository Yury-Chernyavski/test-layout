import { FC } from "react";
import { ReactComponent as Cart } from "./assets/Cart.svg";
import "../../scss/index.scss";

export const Navbar: FC = () => {
	return (
		<nav className="nav">
			<a
				className="nav__link"
				href="#">
				Home
			</a>
			<a
				className="nav__link"
				href="#">
				Product
			</a>
			<a
				className="nav__link"
				href="#">
				<Cart className="nav__cart" />
			</a>
		</nav>
	);
};
