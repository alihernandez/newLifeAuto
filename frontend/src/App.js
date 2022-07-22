import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Nav.js';
import AvailServices from './components/AvailServices';
import Work from './components/Work';
import Footer from './components/Footer';

const  App = () => {
  return (
    <div className='app'>
      <NavBar id="nav" />
      <About />
      <AvailServices />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
