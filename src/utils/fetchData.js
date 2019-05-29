export const api_base =
  "https://opentdb.com/api.php?amount=10&category=26&type=multiple";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`status: ${response.status}`);
    return;
  }
  return response.json();
};

export const fetchData = url => {
  return fetch(url)
    .then(checkResponse)
    .catch(err => console.log(`error: ${err}`));
};
