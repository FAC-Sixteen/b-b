import React from "react";
// import Answer from "./answer/index.js";
import "./style.css";

const Answers = ({ answersArr, checkCorrect }) => {
  const answersEncoded = answersArr.map(encoded => {
    const parser = new DOMParser();

    const dom = parser.parseFromString(
      "<doctype html><body>" + encoded,
      "text/html"
    );

    return dom.body.textContent;
  });

  return (
    <div>
      {answersEncoded
        .sort(() => Math.random() - 0.5)
        .map((answer, i) => (
          <button
            className="answers"
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
