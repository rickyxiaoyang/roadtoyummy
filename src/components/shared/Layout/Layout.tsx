import * as React from "react";
import Header from "../Header/Header";
import "../../../styles/styles.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
