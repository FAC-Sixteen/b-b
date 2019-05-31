import React from "react";
import { fetchData, api_base } from "./utils/fetchData";

import QuestionContainer from "./components/questionContainer/QuestionContainer";

function App() {
  const [data, setData] = React.useState(null);
  const url = api_base;

  React.useEffect(() => {
    fetchData(url)
      .then(response => {
        console.log("this is response", response);
        return setData(response.results);
      })
      .catch(err => console.log(err));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <QuestionContainer data={data} />
    </div>
  );
}

export default App;
