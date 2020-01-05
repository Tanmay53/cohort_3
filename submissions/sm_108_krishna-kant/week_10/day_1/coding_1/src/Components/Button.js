import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ label, varient, callBack }) => {
  return (
    <button className={varient} onClick={callBack}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Clicked',
  varient: 'btn btn-primary',
  callBack: () => console.log('Clicked')
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  varient: PropTypes.string,
  callBack: PropTypes.func
};

export default Button;
