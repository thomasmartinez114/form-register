import './App.css';
import FormInput from './components/FormInputs';

const App = () => {
  return (
    <div className='app'>
      <form>
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
      </form>
    </div>
  );
};

export default App;
