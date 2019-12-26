import React from 'react';

const Task = props => {
  return (
    <div className='flex'>
      <input
        type='checkbox'
        id='task-box'
        className='task-boxs'
        onChange={props.toggle}
      />
      <p>{props.task}</p>
    </div>
  );
};

export default Task;
