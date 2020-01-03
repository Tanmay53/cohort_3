import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{background:'#2C1840'}}>
      <div className='card col-3 mx-auto text-white' style={{background:'#27153A'}}>
        <div className='row my-4'>
          <div className='col-2'>
            <h4><span className='badge badge-warning'>PRO</span></h4>
          </div>
          <div className='col-7 mx-auto'>
            <img className='rounded-circle border border-primary p-2' style={{width:'120px',height:'120px', objectFit:'cover'}} src='/Img12.jpg' alt='img' />
          </div>
          
        </div>

        <div className='text-center'>
          <h4>Ricky Park</h4>
          <p>NEW YORK</p>
          <p className='col-9 mx-auto'>User Interface designer and front-end developer </p>
        </div>

        <div className='row mx-auto'> 
          <div className='btn btn-info mr-1'>Message</div>
          <div className='btn btn-outline-info'>Following</div>
        </div>
        <div className='card-body' style={{background:'#230F37'}}>
          <div className='my-2'>Skills
            <div className='row'>
              <div className='btn btn-outline-light btn-sm m-1'>UI/UX</div>
              <div className='btn btn-outline-light btn-sm m-1'>Front End Development</div>
              <div className='btn btn-outline-light btn-sm my-1'>HTML</div>
            </div>
            <div className='row'>
              <div className='btn btn-outline-light btn-sm m-1'>CSS</div>
              <div className='btn btn-outline-light btn-sm m-1'>JavaScript</div>
              <div className='btn btn-outline-light btn-sm m-1'>React</div>
              <div className='btn btn-outline-light btn-sm m-1'>Node</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
