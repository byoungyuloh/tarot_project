import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import SelectMenu from './pages/SelectMenu';
import SelectImage from './pages/SelectImage';
import Result from './pages/Result';
import Test from './pages/Test';



function App() {
  // const [move, setMove] = useState(false);
  // const startMove = () => {
  //   console.log('start');
  //   setMove(true);
  // }
  // const endMove = () => {
  //   setMove(false);
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={ card_image } className = { move ? 'App-logo' : 'App-stop' } alt='logo' onDragOver={ startMove } onDragEnd = { endMove }/>
  //     </header>
  //     {/* <button onClick = { startMove } style = { { width : '100px' } }>Start</button>
  //     <button onClick = { endMove } style = { { width : '100px' } }>End</button> */}
  //   </div>
  // );


  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main />} />  
    <Route path='/Main' element={<Main />} />
    <Route path='/SelectMenu' element={<SelectMenu />} />
    <Route path='/SelectImage' element={<SelectImage />} />
    <Route path='/test' element={<Test />} />
    <Route path='/result' element={<Result />} />
    </Routes>
    </BrowserRouter>
  );

}

export default App;