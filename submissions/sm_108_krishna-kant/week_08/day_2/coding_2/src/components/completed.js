import React from 'react';

const CompletedTask = props => {
  return (
    <div className='flex'>
      <input type='checkbox' id='task-box' className='task-boxs' checked />
      <strike>{props.task}</strike>
    </div>
  );
};

export default CompletedTask;
