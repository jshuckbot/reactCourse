import './App.css';
import Message from './Message.js';

function App() {
  const text = 'Что-то передаю';
  return (
    <div className="App">
      <Message text={text}/>
    </div>
  );
}

export default App;
