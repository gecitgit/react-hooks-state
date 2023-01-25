import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(1);

//   function increment() {
//     setCount(count + 2);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }



function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // call setCount twice, to update the counter by two every time we click
    function increment() {
      setCount((currentCount) => currentCount + 1);
      setCount((currentCount) => currentCount + 1);
    }
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
