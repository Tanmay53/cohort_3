import axios from "axios";

export default async (url, method, data, headers) => {
  try {
    let res = await axios({
      baseURL: "http://localhost:5000/",
      url,
      method,
      data,
      headers
    });
    return res;
  } catch (err) {
    return { msg: "Error" };
  }
};
