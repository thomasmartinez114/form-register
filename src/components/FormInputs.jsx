import React from 'react';
import './formInput.css';

const FormInputs = props => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className='formInputs'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
