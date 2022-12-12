import logo from './logo.svg';
import './App.css';
import card_image from './image/cd_image.png';
import { useState } from 'react';

function App() {
  const [move, setMove] = useState(false);
  const startMove = () => {
    console.log('start');
    setMove(true);
  }
  const endMove = () => {
    setMove(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ card_image } className = { move ? 'App-logo' : 'App-stop' } alt='logo' onDragOver={ startMove } onDragEnd = { endMove }/>
      </header>
      {/* <button onClick = { startMove } style = { { width : '100px' } }>Start</button>
      <button onClick = { endMove } style = { { width : '100px' } }>End</button> */}
    </div>
  );
}

export default App;