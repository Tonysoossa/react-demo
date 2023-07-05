import styles from "./upperHead.module.css";

interface UpperHeadProps {
  title: string;
}

export function UpperHead({ title }: UpperHeadProps) {
  return <div className={styles.upperHead}>{title}</div>;
}
