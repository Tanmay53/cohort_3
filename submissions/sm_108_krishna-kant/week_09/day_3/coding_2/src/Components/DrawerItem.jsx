import React from 'react';

const DrawerItem = ({ label, title }) => {
  return (
    <div className='d-flex p-3 justify-content-between align-items-center border-bottom border-right'>
      <i className={label}></i>
      <span className='lead'>{title}</span>
    </div>
  );
};

export default DrawerItem;
