import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addalbum from './Components/Addalbum';
import Viewalbum from './Components/Viewalbum';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Addalbum/>}/>
    <Route path="/view" exact element={<Viewalbum/>}/>

    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
