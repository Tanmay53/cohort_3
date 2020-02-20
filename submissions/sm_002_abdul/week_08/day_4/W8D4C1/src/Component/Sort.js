import React from 'react'

function Sort(props){
  return (
    <select
    className='form-control'
    name='sort' 
    onChange={props.sort}>
      <option value=''>Sort By Salary</option>
      <option value='ascending'>Ascending</option>
      <option value='descending'>Descending</option>
    </select>
  )
}

export default Sort


