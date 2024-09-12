import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const increment = () => {
    setCount(count + value);
  };
  const decrement = () => {
    setCount(count - value);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="">
      <h1 className="text-center text-black dark:text-white text-2xl font-semibold">
        Counter
      </h1>

      <div className="flex items-center flex-col w-full align-center text-black dark:text-white">
        <div>
          <button
            onClick={decrement}
            type="button"
            className="w-10 h-10 m-3 bg-blue-500 rounded-lg"
          >
            -
          </button>
          <span className=" w-10 font-bold text-xl">{count}</span>
          <button
            onClick={increment}
            className="w-10 h-10 m-3 bg-blue-500 rounded-lg"
          >
            +
          </button>
        </div>
        <p>Increment/Decrement by</p>
        <input
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
          value={value}
          className="border text-center bottom-2 dark:text-black"
          type="number"
        />
        <button
          onClick={reset}
          type="button"
          className="block text-white w-[10rem] h-10 m-3 bg-red-500 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
