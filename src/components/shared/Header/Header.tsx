import React from "react";
import * as styles from "./Header.module.scss";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.mainText}>Road to Yummy</div>
            <div className={styles.subText}>from hungry to happy</div>
        </div>
    );
}
