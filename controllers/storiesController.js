const { default: axios } = require("axios");

const getStories = require("../utils/getStories");

exports.getTimeStories = (req, res) => {
  axios.get("https://time.com/").then((response) => {
    const stories = getStories(response.data);
    res.send(stories);
  });
};
