import React from 'react';

const Alert = props => {
  return (
    <div class={props.class} role='alert'>
      {props.message}
    </div>
  );
};

export default Alert;
