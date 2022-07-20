import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Nav.js';

import Work from './components/PreviousWork';
import Footer from './components/Footer';

const  App = () => {
  return (
    <div className='app'>
      <NavBar id="nav" />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
