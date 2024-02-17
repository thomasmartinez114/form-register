import { useState, useRef } from 'react';
import './App.css';
import FormInput from './components/FormInputs';

const App = () => {
  // const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // prevents form to reset after submitting
    const data = new FormData(e.target);
    console.log(data);
  };
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <FormInput name='username' placeholder='Username' />
        <FormInput name='email' placeholder='Email' />
        <FormInput name='fullname' placeholder='Full Name' />
        <FormInput name='something' placeholder='Something Else' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
