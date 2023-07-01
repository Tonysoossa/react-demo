import "./App.css";
import "./reset.css";
import styles from "./App.module.css";
import { ActionCard } from "./components/ActionCard";

function App() {
  return (
    <div className={styles.container}>
      <ActionCard title="Are you sure ?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim.
      </ActionCard>
      <p>Tony</p>

      <button onClick={() => console.log("click")}>Click me</button>
    </div>
  );
}

export default App;
