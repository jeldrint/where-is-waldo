import { HashRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/0_MainPage';
import React from 'react';

const App = () => {

  return (
    <HashRouter >
      <MainPage />    
    </HashRouter>
  )
}

export default App;
