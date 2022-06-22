import logo from './logo.svg';
import './App.css';
import WarningSign from './Components/WarningSign';

function App() {
  return (
    <div className="App">
      <WarningSign alertText="This is a Danger alert — check it out!" />
    </div>
  );
}

export default App;
