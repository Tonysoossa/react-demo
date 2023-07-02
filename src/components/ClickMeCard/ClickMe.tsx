import styles from "./ClickMe.module.css";
import { useState } from "react";
interface ClickMeProps {
  title: string;
}

export function ClickMe({ title }: ClickMeProps) {
  const [number, setNumber] = useState(0);
  const onButtonClick = () => {
    setNumber(number + 1);
    console.log("You did click on me !");
  };

  return (
    <div className={styles.clickMeCard}>
      <p className={styles.clickMeTitle}>{title}</p>
      <button onClick={onButtonClick} className={styles.clickMeButton}>
        Click Me {number}
      </button>
    </div>
  );
}
