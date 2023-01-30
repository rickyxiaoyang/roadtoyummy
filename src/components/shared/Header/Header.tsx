import { navigate } from "gatsby";
import React from "react";
import * as styles from "./Header.module.scss";

export default function Header() {
    const onClick = () => {
        navigate("/");
    };

    return (
        <div className={styles.header}>
            <div className={styles.mainText} onClick={onClick}>
                Road to Yummy
            </div>
            <div className={styles.subText}>from hungry to happy</div>
        </div>
    );
}
