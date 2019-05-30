import React from "react";
import { fetchData, api_base } from "./../../utils/fetchData.js";
import Question from "../question/index.js";
import Answers from "../answers/index.js";

const QuestionContainer = () => {
  const [data, setData] = React.useState(null);
  const [correct, setCorrect] = React.useState(false);

  React.useEffect(() => {
    const url = api_base;
    fetchData(url)
      .then(response => {
        console.log("this is response", response);
        return setData(response);
      })
      .catch(err => console.log(err));
  }, [correct]);

  const isCorrectAnswer = answer => {
    setCorrect(answer === correct_answer);
  };

  if (!data) {
    return null;
  }

  const { question, incorrect_answers, correct_answer } = data.results[0];

  if (correct === true) {
    alert("you win");
  }

  return (
    <div>
      <Question
        question={question}
        // class={isCorrect ? "correctButton" : "normalButton"}
      />
      <Answers
        answersArr={incorrect_answers.concat(correct_answer)}
        checkCorrect={isCorrectAnswer}
      />
    </div>
  );
};

export default QuestionContainer;
