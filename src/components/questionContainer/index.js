import React from "react";
import { fetchData, api_base } from "./../../utils/fetchData.js";
import Question from "../question/index.js";

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

  return (
    <div>
      <Question question={data.results[0].question} />
    </div>
  );
};

export default QuestionContainer;
