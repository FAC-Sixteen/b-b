import React from "react";
import Answer from "./answer/index.js";

const Answers = ({ answersArr }) => {
  const [answers, setAnswers] = React.useState([]);

  React.useEffect(() => {
    setAnswers(() => answersArr);
  }, []);

  console.log("this is answers>>>>", answers);
  console.log(typeof answers);

  return (
    <div>
      {answers.map((answer, i) => (
        <Answer key={i} {...answer} />
      ))}
    </div>
  );
};

export default Answers;
