import styles from "./ClickMe.module.css";
import { MouseEvent, MouseEventHandler, useState } from "react";
interface ClickMeProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function ClickMe({ title, onClick }: ClickMeProps) {
  const [number, setNumber] = useState(0);
  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setNumber(number + 1);
    console.log("You did click on me !");
    if (onClick) onClick(e);
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
