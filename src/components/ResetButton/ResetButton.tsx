import { MouseEventHandler } from "react";
import styles from "./resetButton.module.css";

interface ResetButtonProps {
  title: string;
  onResetClick?: MouseEventHandler<HTMLButtonElement>;
  
}

export function ResetButton({ title, onResetClick }: ResetButtonProps) {
  
  return (
    <button onClick={onResetClick} className={styles.resetButton}>
      {title}
    </button>
  );
}
