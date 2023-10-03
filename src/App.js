// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Herosection from './component/Herosection';
import Navbar from './component/Navbar';
import Slider from './component/Slider';

function App() {
  return (
    <div className="App">
      <div className='App_linear'>
        <Navbar />
        <Herosection />
      </div>
      <Slider />
    </div>
  );
}

export default App;
