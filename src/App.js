import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/0_MainPage';
import React, {useState} from 'react';

const App = () => {

  return (
    <BrowserRouter >
      <MainPage />    
    </BrowserRouter>
  )
}

export default App;
