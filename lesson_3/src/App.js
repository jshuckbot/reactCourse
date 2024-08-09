import logo from './logo.svg';
import './App.css';
import TemperatureConverter from "./components/TemperatureConverter";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <Todolist />
    </div>
  );
}

export default App;
