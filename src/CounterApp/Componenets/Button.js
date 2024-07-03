import React, { useRef, useEffect, useState } from "react";

const Button = ({ setCounter, counter }) => {
  const [startCounter, setStartCounter] = useState(false);
  const interval = useRef;

  useEffect(() => {
    if (startCounter) {
      interval.current = setInterval(() => {
        if (counter > 0) {
          setCounter((count) => count - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [startCounter, interval, setCounter, counter]);

  const startButton = () => {
    setStartCounter(!startCounter);
  };

  const resetButton = () => {
    setCounter(30);
    setStartCounter(false);
    console.log(startCounter);
  };
  
  return (
    <div>
      <button onClick={startButton}>{startCounter ? "pause" : "start"}</button>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default Button;
