import React from "react"

function Filter(props){
  const {artists} = props
  return (
    <select
      onChange = {props.filter}
      className='form-control col-md-2 offset-md-2 col-sm-4 offset-sm-4'>
      <option value="">Filter By Artists</option>
      {artists.map((el,idx)=><option value={el}>{el}</option>)}
    </select>
  )
}

export default Filter