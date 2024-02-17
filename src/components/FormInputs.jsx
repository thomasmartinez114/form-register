import React from 'react';
import './formInput.css';

const FormInputs = props => {
  return (
    <div className='formInputs'>
      {/* <label>Username</label> */}
      <input name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInputs;
