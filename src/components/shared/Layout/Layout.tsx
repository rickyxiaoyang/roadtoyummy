import * as React from "react";
import Header from "../Header/Header";
import "../../../styles/styles.scss";
import { Footer } from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
