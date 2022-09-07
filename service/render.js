const axios = require("axios");
const Base_url = "https://jsonplaceholder.typicode.com/posts";
exports.addUser = (req, res) => {
  axios.get(`${Base_url}`).then((res) => console.log(res.data));
  res.send(res.data);
};
