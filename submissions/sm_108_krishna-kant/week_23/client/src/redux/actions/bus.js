import axios from "axios";
import { ADD_BUS, LIST_BUS } from "../actionType";

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

export const busList = () => async dispatch => {
  try {
    let response = await axios.get("http://localhost:5000/buses/list");

    dispatch({
      type: LIST_BUS,
      payload: response.data
    });

    if (response.data.error) {
      throw new Error("Bus list not fetched");
    }
  } catch (error) {
    console.error(error);
  }
};

export const busListCustom = payload => async dispatch => {
  let filterBy = payload.location;
  let value = payload.value;

  try {
    let response = await axios.get(
      `http://localhost:5000/buses/list?filterBy=${filterBy}&value=${value}`
    );

    dispatch({
      type: LIST_BUS,
      payload: response.data
    });

    if (response.data.error) {
      throw new Error("Bus list not fetched");
    }
  } catch (error) {
    console.error(error);
  }
};

export const changePage = payload => async dispatch => {
  let page = payload.page;
  let limit = payload.limit || 10;

  try {
    let response = await axios.get(
      `http://localhost:5000/buses/list?page=${page}&limit=${limit}`
    );

    dispatch({
      type: LIST_BUS,
      payload: response.data
    });

    if (response.data.error) {
      throw new Error("Bus list not fetched");
    }
  } catch (error) {
    console.error(error);
  }
};
