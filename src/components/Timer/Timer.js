import React from "react";
import { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [number, setNumber] = useState(1);

  const startTimer = () => setTimeout(() => setTimer(timer + +number), 2000);

  useEffect(() => {
    if (start) {
      startTimer();
    } else {
      clearInterval(startTimer);
    }
  }, [timer, start]);

  return (
    <div>
      <p>{timer}</p>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <input
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      ></input>
    </div>
  );
}
