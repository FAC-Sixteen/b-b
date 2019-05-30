import React from "react";
// import { fetchData, api_base } from "./../../utils/fetchData.js";
import Question from "../question/index.js";
import Answers from "../answers/index.js";

const QuestionContainer = ({ data }) => {
  const [counter, setCounter] = React.useState(0);
  const [correct, setCorrect] = React.useState("correct");

  const isCorrectAnswer = answer => {
    if (answer === correct_answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  React.useEffect(() => {
    // const url = api_base;
    if (correct === true) {
      console.log("you win");
      setCounter(counter + 1);
    }
    if (correct === false) {
      console.log("you lose");
      setCounter(counter + 1);
    }

    setCorrect("correct");
    console.log(counter);
    console.log(data);

    // fetchData(url)
    //   .then(response => {
    //     console.log("this is response", response);
    //     return setData(response);
    //   })
    //   .catch(err => console.log(err));
  }, [correct]);

  if (counter >= data.length) {
    return <div>play again</div>;
  }

  const { question, incorrect_answers, correct_answer } = data[counter];

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
