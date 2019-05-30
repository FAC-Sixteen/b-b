import React from "react";
import Question from "../question/index.js";
import Answers from "../answers/index.js";
import TimerText from "../timer/index.js";

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
    if (correct === true) {
      alert("you win");
      setCounter(counter + 1);
    }
    if (correct === false) {
      alert("you lose");
      setCounter(counter + 1);
    }

    setCorrect("correct");
    console.log(counter);
    console.log(data);
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
      <TimerText />
    </div>
  );
};

export default QuestionContainer;
