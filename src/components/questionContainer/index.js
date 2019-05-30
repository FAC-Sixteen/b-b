import React from "react";
import { fetchData, api_base } from "./../../utils/fetchData.js";
import Question from "../question/index.js";
import Answers from "../answers/index.js";

const QuestionContainer = () => {
  const [data, setData] = React.useState(null);
  //   const url = api_base;

  React.useEffect(() => {
    const url = api_base;
    fetchData(url)
      .then(response => {
        console.log("this is response", response);
        return setData(response);
      })
      .catch(err => console.log(err));
  }, []);

  if (!data) {
    return null;
  }

  const { question, incorrect_answers, correct_answer } = data.results[0];

  // console.log("this is>>>>", question, incorrect_answers, correct_answer);

  return (
    <div>
      <Question question={question} />
      <Answers answersArr={incorrect_answers.concat(correct_answer)} />
    </div>
  );
};

export default QuestionContainer;
