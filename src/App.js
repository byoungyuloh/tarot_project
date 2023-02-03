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

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main />} />  
    <Route path='/Main' element={<Main />} />
    <Route path='/SelectMenu' element={<SelectMenu />} />
    <Route path='/SelectImage' element={<SelectImage />} />
    <Route path='/Result' element={<Result />} />
    </Routes>
    </BrowserRouter>
  );

}

export default App;