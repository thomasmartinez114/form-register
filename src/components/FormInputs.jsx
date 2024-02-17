import React from 'react';
import './formInput.css';

const FormInputs = props => {
  return (
    <div className='formInputs'>
      <label>Username</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInputs;
