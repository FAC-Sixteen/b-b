import React from "react";

const Question = ({ question }) => {
  const parser = new DOMParser();

  const dom = parser.parseFromString(
    "<doctype html><body>" + question,
    "text/html"
  );
  return <h2>{dom.body.textContent}</h2>;
};

export default Question;
