import { ReactNode, useState } from "react";
import styles from "./styles.module.css";

interface ActionCardProps {
  title: string;
  children: ReactNode;
}
export function ActionCard({ title, children }: ActionCardProps) {
  const [number, setNumber] = useState(0);
  const onButtonClick = () => {
    setNumber(number + 1);
  };

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{children}</p>
      <div className={styles.actions}>
        <button onClick={onButtonClick} className={styles.cancel}>
          Cancel
        </button>
        <button onClick={onButtonClick} className={styles.delete}>
          Delete {number}
        </button>
      </div>
    </div>
  );
}
