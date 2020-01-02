import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SelectLocation from '../component/SelectLocation/SelectLocation';
import ShowVehicle from '../component/ShowVehicle/ShowVehicle';
import ConfirmRide from '../component/Confirm/ConfirmRide';
import Message from '../component/Message/Message';
import Cars from '../component/Cars';
import CarDetails from '../component/CarDetails';
import Auth from '../component/Auth/Auth';
import PrivateRoute from '../component/PrivateRoute';
import Orders from '../component/Orders/Orders';

const main = () => (
  <div>
    <Switch>
      <Route path='/' exact render={props => <SelectLocation {...props} />} />
      <Route
        path='/selectCar'
        exact
        render={props => <ShowVehicle {...props} />}
      />
      <Route
        path='/confirm-ride'
        exact
        render={props => <ConfirmRide {...props} />}
      />
      <Route
        path='/order-confirmed'
        exact
        render={props => <Message {...props} />}
      />
      <Route path='/cars' exact render={props => <Cars {...props} />} />
      <Route path='/cars/:car_id' render={props => <CarDetails {...props} />} />
      <Route path='/login' render={props => <Auth {...props} />} />
      <PrivateRoute path='/bill-summary'>
        <Orders />
      </PrivateRoute>
    </Switch>
  </div>
);

export default main;
