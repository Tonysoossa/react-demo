import "./app.css";
import "./reset.css";
import styles from "./app.module.css";
import { ActionCard } from "./components/ActionCard";
import { ClickMe } from "./components/ClickMeCard";
import { DeleteMessage } from "./components/DeleteMessage";
import { useState } from "react";
import { ResetButton } from "./components/ResetButton";
import { UpperHead } from "./components/UpperHead";
import { Footer } from "./components/Footer";

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteM, setShowDeleteM] = useState<boolean>(false);
  const [number, setNumber] = useState(0);
  return (
    <>
      <UpperHead title="this is a nav bar" />
      <div className={styles.container}>
        <div className={styles.centerDiv}>
          {!showDeleteM && (
            <ClickMe
              onClick={() => setShow(true)}
              number={number}
              setNumber={setNumber}
              title="Tony"
            />
          )}
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
          <ResetButton
            onResetClick={() => {
              setShow(false);
              setShowDeleteM(false);
              setNumber(0);
              console.log("reset");
            }}
            title="Reload page"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
