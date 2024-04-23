import { FC } from "react";
import { ICardData } from "../../../models";
import { Button } from "../../";

export const Card: FC<ICardData> = ({ title, subtitle, img }) => {
	return (
		<div
			className="card"
			style={{
				backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0%), #0F1420C9), 
				url(${img})`,
			}}>
			<h3 className="card__title">{title}</h3>
			<p className="card__subtitle">{subtitle}</p>
			<Button type="secondary"></Button>
		</div>
	);
};
