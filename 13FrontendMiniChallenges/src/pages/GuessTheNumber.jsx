import React, { useEffect, useState } from "react";

function GuessTheNumber() {
  const [num, setNum] = useState(0);
  const [guessNum, setGuessNum] = useState(null);
  const [msg, setMsg] = useState("");

  function generateNumber() {
    setNum(Math.floor(Math.random() * 100));
    setMsg("");
  }

  function checkGuess() {
    if (guessNum == num) {
      setMsg("You guessed it Right!");
    } else if (guessNum > num) {
      setMsg("Your guess is Higher than the actual number");
    } else {
      setMsg("Your guess is Less than the actual number");
    }
  }

  useEffect(() => {
    generateNumber();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl dark:text-white font-bold">
        Guess The Number
      </h1>
      <div className="dark:text-white m-auto w-[300px] h-auto text-center text-lg">
        <p className="">Guess a Number Between 0 and 100 </p>
        <input
          type="number"
          name=""
          id=""
          className="w-full m-5 dark:text-black"
          onChange={(e) => {
            setGuessNum(e.target.value);
          }}
        />
        <div className="flex justify-around">
          <button
            className="bg-slate-400 rounded-md w-[100px]"
            onClick={generateNumber}
          >
            Reset
          </button>{" "}
          <button
            className="bg-slate-400 rounded-md w-[100px]"
            onClick={checkGuess}
          >
            Check
          </button>
        </div>
      </div>
      <div className="p-4">
        {<p className="text-center dark:text-white text-lg">{msg}</p>}
      </div>
    </div>
  );
}

export default GuessTheNumber;
