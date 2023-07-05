import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { UpperHead } from "./components/UpperHead/UpperHead.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UpperHead title="gang" />
    <App />
  </React.StrictMode>
);

// import upperStyles from "./app.css";
// <div>
//   <UpperHead className={upperStyles.logo}></UpperHead>
// </div>
