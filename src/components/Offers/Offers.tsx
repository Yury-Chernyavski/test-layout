import { FC } from "react";
import { cardsData } from "../../helpers/cardsData.helper";
import { Card } from "../";

export const Offers: FC = () => {
	return (
		<section className="offers">
			<div className="offers__wrapper__content">
				<h2 className="offers__title">Offers</h2>
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
