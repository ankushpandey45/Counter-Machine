import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [counter, setCounter] = useState(30);

  return (
    <div>
      <h1>Counter</h1>
      <h5>This is your counter machine </h5>
      <h1>{counter}</h1>
      <Button setCounter={setCounter} counter={counter}/>
    </div>
  );
};

export default Header;
