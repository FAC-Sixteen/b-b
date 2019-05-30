import React from "react";
// import Answer from "./answer/index.js";

const Answers = ({ answersArr, checkCorrect }) => {
  return (
    <div>
      {answersArr.map((answer, i) => (
        <button
          key={i}
          type="button"
          aria-label="answer button"
          onClick={() => checkCorrect(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
