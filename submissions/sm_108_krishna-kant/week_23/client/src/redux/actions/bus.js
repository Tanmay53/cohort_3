import axios from "axios";
import { ADD_BUS } from "../actionType";

export const addBus = payload => async dispatch => {
  try {
    let start_time = `${payload.hours}:${payload.minute}:00`;
    delete payload.hours;
    delete payload.minute;
    payload["start_time"] = start_time;

    let response = await axios({
      url: "http://localhost:5000/buses/add",
      method: "POST",
      data: payload,
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.data.error) {
      throw new Error("Bus Not Added");
    }

    dispatch({
      type: ADD_BUS
    });
  } catch (error) {
    console.error(error);
  }
};
