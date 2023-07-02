import styles from "./delete.module.css";

interface DeleteProps {
  message: string;
}

export function DeleteMessage({ message }: DeleteProps) {
  return <p className={styles.delete}>{message}</p>;
}
