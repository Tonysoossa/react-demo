import "./App.css";
import "./reset.css";
import styles from "./App.module.css";
import { ActionCard } from "./components/ActionCard";
import { ClickMe } from "./components/ClickMeCard";

function App() {
  return (
    <div className={styles.container}>
      <ClickMe title="Tony"/>
      <ActionCard title="Are you sure ?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim.
      </ActionCard>
    </div>
  );
}

export default App;
