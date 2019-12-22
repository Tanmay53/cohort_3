import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar';
const Catalog = ({ match, title, item }) => {
  console.log(match);
  return (
    <div className='container mt-5'>
      <div className='row my-2'>
        <img
          src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/2/26/f296d611-bb8b-440a-8cf0-f1fd0c0c91931551190268018-slicing-file-discover-nav_02.jpg'
          alt=''
          className='img-fluid'
        />

        <div className='col-lg-10 col-sm-10 mt-5'>
          <h2 className='lead' style={{ fontSize: '2rem' }}>
            {title}
          </h2>
          <div className='row'>
            {item.map(item => {
              return (
                <div
                  className='card p-0 col-lg-3 col-sm-2 m-4'
                  style={{ width: '250px' }}
                >
                  <img
                    className='card-img-top'
                    src={item.img_url}
                    alt='Card image cap'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text'>{item.price} Rs</p>
                    <Link
                      to={`${match.url}/${item.id}`}
                      href='#'
                      className='btn btn-primary btn-block'
                    >
                      View More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Catalog;
