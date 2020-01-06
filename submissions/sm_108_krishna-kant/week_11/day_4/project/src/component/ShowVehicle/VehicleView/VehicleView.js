import React from 'react';

import Vehicle from '../Vehicle/Vehicle';

const ViechelView = props => (
  <div className='mt-4 w-100'>
    <h2 className='lead text-center'>
      Here are the list of available viechel at your area
    </h2>
    <div className='d-flex flex-wrap justify-content-around mt-5'>
      {props.vehicles.map(vehicle => (
        <Vehicle key={vehicle.Name} vehicle={vehicle} {...props} />
      ))}
    </div>
  </div>
);

export default ViechelView;
