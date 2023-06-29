import "./App.css";
import { Title } from "./Title";

function App() {
  return (
    <div>
      <p>Tony</p>
      <Title title="Component 1" description="description 1" />
      <Title title="Component 2" description="description 2" />
      <button onClick={() => console.log("click")}>Click me</button>
    </div>
  );
}

export default App;
