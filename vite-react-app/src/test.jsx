import { useState } from "react";
function test() {
  let [counter, setCounter] = useState(10);

  // function for increasing the value of counter
  const addValue = () => {
    setCounter((preCounter) => {
      if (preCounter >= 20) {
        alert("Max-Value Reached | 20");
        return 20;
      }
      return preCounter + 1;
    });
  };

  //function for decreasing the value of counter
  const removeValue = () => {
    setCounter((preCounter) => {
      if (preCounter <= 0) {
        alert("Min-Value Reached | 0");
        return preCounter;
      }
      return preCounter - 1;
    });
  };

  return (
    <>
      <h1>Learn | hooks</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}
export default test;
