import { FC } from "react";
import "../../scss/index.scss";
import Earth from "./assets/Earth.png";
import { Button } from "../index";

export const Banner: FC = () => {
	return (
		<section className="banner">
			<div className="banner__wrapper">
				<div className="banner__title-wrapper">
					<h1 className="banner__title">
						Discover the vast expanses of <span>space</span>
					</h1>
					<h2 className="banner__subtitle">
						Where the possibilities are <span>endless!</span>
					</h2>
					<Button type="primal">Learn more</Button>
				</div>
				<img
					width="330px"
					height="360px"
					src={Earth}
					alt="Earth"
				/>
			</div>
		</section>
	);
};
