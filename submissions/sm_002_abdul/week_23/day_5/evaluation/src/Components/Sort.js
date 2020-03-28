import React from 'react'

function Sort(props){
  /*sort dropdown component*/

  return (
    <select
      className='form-control col-md-2 offset-md-2 col-sm-4 offset-sm-4'
      onChange={props.sort}>
      <option value=''>Sort By Year</option>
      <option value='ascending'>Ascending</option>
      <option value='descending'>Descending</option>
    </select>
  )
}

export default Sort