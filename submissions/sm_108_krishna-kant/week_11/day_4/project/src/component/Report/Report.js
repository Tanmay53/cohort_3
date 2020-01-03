import React from 'react';

const Report = props => (
  <div className='card col-md-8 my-3 p-1'>
    <div className='row align-items-center'>
      <div className='col-md-3' style={{ height: '180px', width: '300px' }}>
        <img
          src={props.carDetails.img_url}
          style={{ height: '100%' }}
          className='img-fluid'
        />
      </div>
      <div className='col-md-8 ml-3 w-100'>
        <h2 className='lead' style={{ fontSize: '2rem' }}>
          {props.carDetails.Name}
        </h2>
        <table className='table'>
          <tr className='row'>
            <td className='text-danger col'>Miles Per Gallon</td>{' '}
            <td className='col'>{props.carDetails.Miles_per_Gallon}</td>
            <td className='text-danger col'>Cylinders</td>
            <td className='col'>{props.carDetails.Cylinders}</td>
          </tr>
          <tr className='row'>
            <td className='text-danger col'>Displacement</td>{' '}
            <td className='col'>{props.carDetails.Displacement}</td>
            <td className='text-danger col'>Horsepower</td>
            <td className='col'>{props.carDetails.Horsepower}</td>
          </tr>
          <tr className='row'>
            <td className='text-danger col'>Weight in lbs</td>{' '}
            <td className='col'>{props.carDetails.Weight_in_lbs}</td>
            <td className='text-danger col'>Acceleration</td>
            <td className='col'>{props.carDetails.Acceleration}</td>
          </tr>
          <tr className='row'>
            <td className='text-danger col'>Year</td>{' '}
            <td className='col'>{props.carDetails.Year}</td>
            <td className='text-danger col'>Origin</td>
            <td className='col'>{props.carDetails.Origin}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default Report;
