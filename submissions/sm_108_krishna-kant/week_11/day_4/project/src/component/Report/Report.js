import React from 'react';

const Report = props => (
  <div className='card col-md-8 my-3 p-1'>
    <div className='d-flex align-items-center'>
      <div style={{ height: '180px', width: '300px' }}>
        <img
          src={props.carDetails.img_url}
          style={{ height: '100%' }}
          className='img-fluid'
        />
      </div>
      <div className='ml-3 w-100'>
        <h2 className='lead' style={{ fontSize: '2rem' }}>
          {props.carDetails.Name}
        </h2>
        <table className='table'>
          <tr>
            <td className='text-danger'>Miles Per Gallon</td>{' '}
            <td>{props.carDetails.Miles_per_Gallon}</td>
            <td className='text-danger'>Cylinders</td>
            <td>{props.carDetails.Cylinders}</td>
          </tr>
          <tr>
            <td className='text-danger'>Displacement</td>{' '}
            <td>{props.carDetails.Displacement}</td>
            <td className='text-danger'>Horsepower</td>
            <td>{props.carDetails.Horsepower}</td>
          </tr>
          <tr>
            <td className='text-danger'>Weight in lbs</td>{' '}
            <td>{props.carDetails.Weight_in_lbs}</td>
            <td className='text-danger'>Acceleration</td>
            <td>{props.carDetails.Acceleration}</td>
          </tr>
          <tr>
            <td className='text-danger'>Year</td>{' '}
            <td>{props.carDetails.Year}</td>
            <td className='text-danger'>Origin</td>
            <td>{props.carDetails.Origin}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default Report;
