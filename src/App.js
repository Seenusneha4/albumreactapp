import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addalbum from './Components/Addalbum';
import Viewalbum from './Components/Viewalbum';

function App() {
  return (
    <div>
      <Addalbum/>
      <Viewalbum/>
    </div>
  );
}

export default App;
