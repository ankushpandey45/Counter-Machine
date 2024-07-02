import React, { useState } from "react";

const Header = () => {
  const [counter, setCounter] = useState(30);

  return (
    <div>
      <h1>Counter</h1>
      <h5>This is your counter machine </h5>
      <h1>{counter}</h1>

    </div>
  );
};

export default Header;
