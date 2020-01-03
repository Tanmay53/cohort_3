import React from 'react';

const OrderSummary = props => {
  let consumedRide = 210 / parseInt(props.fuelDetail);
  let pricePerLiter = 72;
  return (
    <div className='card ml-2 p-3 my-3'>
      <div style={{ height: '180px' }}>
        <p className='lead'>Order Summary</p>
        <p>
          Car Milage Per KM : <span>{props.fuelDetail}</span>
        </p>
        <p>
          Distance : <span>210 KM</span>
        </p>
        <p>
          Total Fuel Charged : <span>{consumedRide.toFixed(2)}</span>
        </p>
        <p>
          Price : <span>{consumedRide * pricePerLiter} INR</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
