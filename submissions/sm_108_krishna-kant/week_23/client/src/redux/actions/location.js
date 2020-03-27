import { ADD_LOCATION, LOAD_LOCATION } from "../actionType";
import axios from "axios";

export const loadLocation = () => async dispatch => {
  let response = await axios.get("http://localhost:5000/location/list");
  dispatch({
    type: LOAD_LOCATION,
    payload: response.data.data
  });
};

export const addLocation = payload => async dispatch => {
  try {
    let response = await axios({
      url: "http://localhost:5000/location/add",
      method: "POST",
      data: {
        name: payload
      },
      headers: {
        "Content-Type": "application/json"
      }
    });

    dispatch({
      type: ADD_LOCATION
    });

    if (response.data.error) {
      throw new Error("Location Not Added");
    }
  } catch (error) {
    console.error(error.message);
  }
};
