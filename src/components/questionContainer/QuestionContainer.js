import React from "react";
import Question from "../question/Question";
import Answers from "../answers/Answers";
import TimerText from "../timer/Timer";
// import "./styleQuestionContainer.css";

const QuestionContainer = ({ data }) => {
  const [counter, setCounter] = React.useState(0);
  const [correct, setCorrect] = React.useState(null);
  const [timer, setTimer] = React.useState(10);

  const isCorrectAnswer = answer => {
    setCorrect(answer === correct_answer);
  };

  const setNextQuestion = () => {
    setCounter(counter + 1);
    setTimer(10);
  };

  React.useEffect(() => {
    // const countdown = setInterval(() => {
    //   setTimer(time => time - 1);
    // }, 1000);

    if (correct === true) {
      alert("That's Correct :)");
      setNextQuestion();
    }
    if (correct === false) {
      // if (timer !== 10) {
      alert(`Sorry that's Wrong :( The correct answer is ${correct_answer}`);
      // }
      setNextQuestion();
    }

    setCorrect("correct");
    // return () => clearInterval(countdown);
  }, [correct]);

  if (timer === 0) {
    alert("Out of time :(");
    setCorrect(false);
    setTimer(10);
  }

  if (counter >= data.length) {
    return <div>play again</div>;
  }

  const { question, incorrect_answers, correct_answer } = data[counter];

  return (
    <div className="main-container">
      <Question question={question} />
      <Answers
        answersArr={incorrect_answers.concat(correct_answer)}
        checkCorrect={isCorrectAnswer}
      />
      {/* <TimerText timer={timer} /> */}
    </div>
  );
};

export default QuestionContainer;
