import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function addValue() {
    if (count < 20) setCount(count + 1);
  }
  function removeValue() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <>
      <h1>Good Morning</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remover value</button>
    </>
  );
}

export default App;
