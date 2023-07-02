import { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.css";
import { Headtitle } from "../HeadTitle";

interface ActionCardProps {
  title: string;
  children: ReactNode;
  onCancelClick?: MouseEventHandler<HTMLButtonElement>;
  onDeleteClick?: MouseEventHandler<HTMLButtonElement>;
}

export function ActionCard({
  title,
  children,
  onCancelClick,
  onDeleteClick,
}: ActionCardProps) {
  return (
    <div className={styles.cardContainer}>
      <Headtitle>{title}</Headtitle>
      <p className={styles.description}>{children}</p>
      <div className={styles.actions}>
        <button onClick={onCancelClick} className={styles.cancel}>
          Cancel
        </button>
        <button onClick={onDeleteClick} className={styles.delete}>
          Delete
        </button>
      </div>
    </div>
  );
}
