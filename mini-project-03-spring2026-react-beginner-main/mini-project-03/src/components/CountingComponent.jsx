import React, { useState } from "react";

/*
 hook --> lets you use different React features from your components. 
 You can either use the built-in Hooks or combine them to build your own.
 */

const CountingComponent = ({ upOrDown, valueBy }) => {
  const [count, setCount] = useState(0); // useState is a hook
  //   console.log(upOrDown);
  //   console.log(valueBy);
  const handleCount = () => {
    if (upOrDown) setCount(count + valueBy);
    else setCount(count - valueBy);
  };

  return (
    <div className={upOrDown ? "up-div" : "down-div"}>
      <h1> Hello React 01</h1>
      <button onClick={handleCount}>Do Some Counting</button>
      <p>Current Count Value is: {count}</p>
    </div>
  );
};

export default CountingComponent;
