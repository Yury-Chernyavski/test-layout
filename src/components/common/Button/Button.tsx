import { FC, ReactNode } from "react"

interface IButton {
	type: "primal" | "secondary";
	children?: ReactNode;
}

export const Button: FC<IButton> = ({type, children = "Learn more"}) => {
	return (
		<button className={`button ${type}`}>
			{children}
		</button>
	);
}
