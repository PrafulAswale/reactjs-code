import React, { useEffect, useState } from "react";
import questions from "../assets/data.js";

function Accordion() {
  const [show, setShow] = useState(false);
  const [openId, setOpenId] = useState(null);

  const toggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="">
      <h1 className="text-2xl text-center dark:text-white">Accordion</h1>

      {questions.map((question) => (
        <div className="border border-gray-400 mb-3" key={question.id}>
          <div className="flex justify-between items-center">
            <h3 className="text-md font-bold dark:text-white p-2">
              {question.title}
            </h3>
            <button
              className="bg-gray-300 rounded-xl float-end w-7 h-6 text-center text-white m-2"
              type="button"
              onClick={() => {
                toggle();
                setOpenId(question.id);
              }}
            >
              {show ? "-" : "+"}
            </button>
          </div>
          {show && openId === question.id && (
            <p className=" dark:text-white p-4 m-2">{question.info}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
