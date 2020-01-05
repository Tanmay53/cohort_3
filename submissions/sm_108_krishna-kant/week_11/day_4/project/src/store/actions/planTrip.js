import {
  CREATE_TRIP,
  FETCH_TRIP,
  FETCH_VEHICLES,
  SELECT_CAR,
  FETCH_SELECTED_CAR,
  CHANGE_CAR_LOCATION,
  FETCH_ALL_VEHICLES,
  DISPLAY_VEHICLE
} from './type';

export const createTrip = tripDetails => ({
  type: CREATE_TRIP,
  payload: tripDetails,
  message: 'Trip Created Successfully'
});

export const fetchTrip = () => ({
  type: FETCH_TRIP,
  message: 'Your Trip Details '
});

export const fetchVehicle = userLocation => ({
  type: FETCH_VEHICLES,
  payload: userLocation,
  message: `Fetch Viechel for location ${userLocation}`
});

export const fetchAllCars = () => ({
  type: FETCH_ALL_VEHICLES,
  message: 'Loading All Vehicles'
});
export const selectCar = car => ({
  type: SELECT_CAR,
  payload: car,
  message: `${car.Name} is selected`
});

export const fetchSelectedCar = () => ({
  type: FETCH_SELECTED_CAR,
  message: 'Fetching Selected car'
});

export const displayVehicle = id => ({
  type: DISPLAY_VEHICLE,
  payload: id,
  message: 'Show Car Details'
});

export const changeCarLocation = (car, location) => ({
  type: CHANGE_CAR_LOCATION,
  payload: {
    car: car,
    to: location
  },
  message: 'Changing Car Location'
});
