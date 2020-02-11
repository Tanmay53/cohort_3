import React from 'react'

function Movies(props){
  
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='row'>
          <div className='col-3'>
            <img src= 'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1517845732/1517845731.jpg' width={200} height={200} alt=''/>
          </div>
          <div className='col-5'>
            <h5>{props.item.name}</h5>
            <p>Starring : {props.item.leadActor} {props.item.leadActress}</p>
            <p>Directed By : {props.item.director}</p>
            <small>Summary : {props.item.summary}</small>
          </div>
          <div className='col-4'>
            <button disabled className='bg-success text-white'>{props.item.rating}</button><br/>
            <small className='text-muted'>Language : {props.item.language} </small><br/>
          </div>

        </div>
      </div>
      <div className='card-footer row'>
        <div className='col-7'></div>
        <button disabled className='col-2 btn btn-outline-success text-success'>
          R- Rated : {props.item.rRating ? 'Yes':'No'}</button>
      </div>

    </div>
  )
}

export default Movies