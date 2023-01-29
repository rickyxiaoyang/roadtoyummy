import React, { ReactNode } from "react";
import Header from "../Header/Header";
import "../../../styles/styles.scss";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
