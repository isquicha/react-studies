import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'John';
  const lastName = 'Wick';
  const age = 28;
  const job = "Gentleman";
  const placeHolder = "Hello";
  return (
    <div className="App">
      <h3>Full name: {firstName} {lastName}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <input placeholder={placeHolder} />
    </div>
  );
}

export default App;
