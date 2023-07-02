import styles from "./ClickMe.module.css";

interface ClickMeProps {
  title: string;
}

export function ClickMe({ title }: ClickMeProps) {
  const onButtonClick = () => {
    console.log("You did click on me !");
  };
  return (
    <div className={styles.clickMeCard}>
      <p className={styles.clickMeTitle}>{title}</p>
      <button onClick={onButtonClick} className={styles.clickMeButton}>
        Click Me
      </button>
    </div>
  );
}