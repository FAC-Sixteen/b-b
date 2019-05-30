import React from "react";

const Answer = ({ answer }) => {


  return (
    <button type="button" aria-label="answer button" onClick{()=> onClick(answer)}>
      {answer}
    </button>
  );
};

export default Answer;
