import styles from "./clickMe.module.css";
import { MouseEvent, MouseEventHandler} from "react";

interface ClickMeProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  number: number
  setNumber: React.Dispatch<React.SetStateAction<number>>
}

export function ClickMe({ title, onClick, number, setNumber }: ClickMeProps) {
  
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
