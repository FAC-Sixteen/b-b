import React from "react";
import Answer from "../answer/index.js";

const Answers = ({ correct, incorrect }) => {
  const [answers, setAnswers] = React.useState([]);

  React.useEffect(() => {
    setAnswers((correct, incorrect) => incorrect.concat(correct));
  });

  return (
    <div>
      {answers.map((answer, i) => (
        <Answer key={i} {...answer} />
      ))}
    </div>
  );
};

export default Answers;
