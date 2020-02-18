import React from 'react'

function Filter(props){
  return (
    <select
      className='form-control' 
      name='filterByDepartment' 
      onChange={props.filter}>

      <option value=''>Show All</option>
      <option value='hr'>Human Resources</option>
      <option value='security'>Security</option>
      <option value='marketing'>Marketing</option>
      <option value='it'>IT</option>
      <option value='finance'>Finance</option>

    </select>
  )
}

export default Filter