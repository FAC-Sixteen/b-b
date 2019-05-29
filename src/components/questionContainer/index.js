import React from "react";
import { fetchData, api_base } from "./../../utils/fetchData.js";

const QuestionContainer = () => {
  const url = api_base;

  fetchData(url)
    .then(response => console.log(response))
    .catch(err => console.log(err));

  return <h1>hello</h1>;
};

export default QuestionContainer;
