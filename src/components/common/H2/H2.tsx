import { FC, ReactNode } from "react";

interface IHeader {
	children: ReactNode;
}

export const H2: FC<IHeader> = ({ children }) => {
	return <h2 className="title">{children}</h2>;
};
