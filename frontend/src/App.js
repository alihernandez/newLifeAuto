import './App.css';
import NavBar from './components/Nav.js';
import About from './components/About';
import Work from './components/PreviousWork';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar id="nav" />
      <About />
      <Work />
    </div>
  );
}

export default App;
