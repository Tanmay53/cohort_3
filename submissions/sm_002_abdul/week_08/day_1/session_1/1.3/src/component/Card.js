import React from 'react';

function Card(){
  return (
      <div className='card col-4 bg-midnightblue'>
        <img src='https://images.pexels.com/photos/247120/pexels-photo-247120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' height='50' width='100' alt='' className='rounded-circle col-4 offset-4'></img>
        <div className='text-center'>
          <h5 className="text-muted">Ricky Park</h5>
          <small className='font-weight-bold text-muted'>NEW YORK</small><br></br>
          <div className='row'>
            <small className='text-muted col-6 offset-3'>User Interface Designer and Front-End Developer</small>
          </div>
          <div className='row'>
            <div className='btn btn-primary col-3 offset-3'>Message</div>
            <div className='btn btn-outline-primary col-3'>Following</div>
          </div>
        </div>
        <div className='card-footer'>
          <small className='font-weight-bold text-muted text-left'>SKILLS</small><br></br>
          <div>
            <button type="button" class="btn btn-outline-info m-1">UI/UX</button>
            <button type="button" class="btn btn-outline-info m-1">Front End Development</button>
            <button type="button" class="btn btn-outline-info m-1">HTML</button>
            <button type="button" class="btn btn-outline-info m-1">CSS</button>
            <button type="button" class="btn btn-outline-info m-1">Javascript</button>
            <button type="button" class="btn btn-outline-info m-1">React</button>
            <button type="button" class="btn btn-outline-info m-1">Node</button>
          </div>
        </div>
      </div>
  )
}

export default Card