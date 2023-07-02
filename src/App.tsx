import "./App.css";
import "./reset.css";
import styles from "./App.module.css";
import { ActionCard } from "./components/ActionCard";
import { ClickMe } from "./components/ClickMeCard";
import { useState } from "react";

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <ClickMe onClick={() => setShow(true)} title="Tony" />
      {show && (
        <ActionCard title="Are you sure ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          enim.
        </ActionCard>
      )}
    </div>
  );
}

export default App;
