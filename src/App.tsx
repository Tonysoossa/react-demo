import "./App.css";
import "./reset.css";
import styles from "./app.module.css";
import { ActionCard } from "./components/ActionCard";
import { ClickMe } from "./components/ClickMeCard";
import { DeleteMessage } from "./components/DeleteMessage";
import { useState } from "react";
import { ResetButton } from "./components/ResetButton";

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteM, setShowDeleteM] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      
      <ResetButton
        onResetClick={() => {
          console.log("reset");
        }}
        title="Reload page"
      />
      {!showDeleteM && <ClickMe onClick={() => setShow(true)} title="Tony" />}
      {show && (
        <ActionCard
          onCancelClick={() => {
            setShow(false);
            console.log("You did click on Cancel!");
          }}
          onDeleteClick={() => {
            setShow(false);
            setShowDeleteM(true);
            console.log("You did click on Delete!");
          }}
          title="Are you sure ?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          enim.
        </ActionCard>
      )}
      {showDeleteM && <DeleteMessage message="Delete completed !" />}
    </div>
  );
}

export default App;
