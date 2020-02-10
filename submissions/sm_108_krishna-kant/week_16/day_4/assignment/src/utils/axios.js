const axios = require("axios");

const fetch = async (url, method, body = {}) => {
  const response = await axios.request({
    url,
    method,
    body,
    baseURL: "http://localhost:5000"
  });
  return response;
};

module.exports = fetch;
