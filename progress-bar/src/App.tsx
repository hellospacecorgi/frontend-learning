import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DismissableAlert from "./components/DismissableAlert";

export default function App() {
  const [percentage, setPercentage] = useState(0);
  const handleOnClick = (changeValue: number) => {
    let value = percentage + changeValue;
    if (value > 100 || value < 0) {
      setAlertVisibility(true);
      console.log(
        "change denied - " + "current: " + percentage + " after: " + value
      );
      return;
    }
    console.log("current: " + percentage + " after: " + value);
    setAlertVisibility(false);
    setPercentage(value);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <h4>Progress Bar Exercise</h4>
      <br></br>
      <div>
        <ProgressBar now={percentage} label={percentage + "%"} />
        <br></br>
        <Button className="button" onClick={() => handleOnClick(-10)}>
          -10
        </Button>
        <Button className="button" onClick={() => handleOnClick(-5)}>
          -5
        </Button>
        <Button className="button" onClick={() => handleOnClick(5)}>
          +5
        </Button>
        <Button className="button" onClick={() => handleOnClick(10)}>
          +10
        </Button>
        <br></br>
        {alertVisible && (
          <DismissableAlert onClose={() => setAlertVisibility(false)}>
            <strong>Error!</strong> Percentage value cannot be negative or over
            100.
          </DismissableAlert>
        )}
      </div>
    </>
  );
}
