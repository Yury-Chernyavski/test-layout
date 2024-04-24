import { FC } from "react";
import { cardsData } from "../../helpers/cardsData.helper";
import { Card, H2 } from "../";

export const Offers: FC = () => {
	return (
		<section className="offers">
			<div className="offers__wrapper__content">
				<H2>Offers</H2>
				{/* <h2 className="offers__title">Offers</h2> */}
				<div className="offers__wrapper__cards">
					{cardsData.map(el => (
						<Card
							key={el.id}
							title={el.title}
							subtitle={el.subtitle}
							img={el.img}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
