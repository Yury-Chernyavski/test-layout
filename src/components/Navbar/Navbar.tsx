import { FC } from "react";
import { ReactComponent as Cart } from "./assets/Cart.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { ReactComponent as Close } from "./assets/Close.svg";
import "../../scss/index.scss";

export const Navbar: FC = () => {
	return (
		<nav className="nav">
			<input
				type="checkbox"
				id="menu-toggle"
			/>
			<label
				htmlFor="menu-toggle"
				className="burger">
				<Menu className="burger-icon"/>
				<Close className="close-icon"/>
			</label>
			<div className="menu">
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
			</div>
		</nav>
	);
};
