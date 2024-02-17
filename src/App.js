import './App.css';
import FormInput from './components/FormInputs';

const App = () => {
  return (
    <div className='app'>
      <form>
        <FormInput placeholder='Username' />
        <FormInput placeholder='Email' />
        <FormInput placeholder='Full Name' />
        <FormInput placeholder='Something Else' />
      </form>
    </div>
  );
};

export default App;
