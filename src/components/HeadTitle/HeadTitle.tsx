import { ReactNode } from "react";
import styles from "./HeadTitle.module.css";

interface HeadTitleProps {
  children: ReactNode;
}

export function Headtitle({ children }: HeadTitleProps) {
  return <h1 className={styles.headTitle}>{children}</h1>;
}
