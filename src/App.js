import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/0_MainPage';
const App = () => {
  return (
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
  )
}

export default App;
