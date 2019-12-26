import React from 'react';

const Sidebar = () => {
  return (
    <div className='col-lg-2 col-sm-4 p-2 pl-4 mt-5'>
      <h4 className='lead'>Clothing</h4>
      <ul style={{ listStyle: 'none', padding: '0px' }}>
        <li className='lead' style={{ fontSize: '16px' }}>
          T-shirts
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Casual shirts
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Formal shirts
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Suits
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Jeans
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Casual Trousers
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Formal Trouser
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Shorts
        </li>
        <li className='lead' style={{ fontSize: '16px' }}>
          Track Pant
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
