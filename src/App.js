import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInputs';

const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      label: 'Username',
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      errorMessage: 'Valid email address only!',
      label: 'Email',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'text',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!',
      label: 'Password',
    },
    {
      id: 5,
      name: 'confrimPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Passwords do not match!',
      label: 'Confirm Password',
    },
  ];

  const handleSubmit = e => {
    e.preventDefault(); // prevents form to reset after submitting
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
