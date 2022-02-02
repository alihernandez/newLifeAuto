import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import MainAbout from './components/mainAbout/MainAbout';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <MainAbout />
    <Footer />
    </div>
  );
}

export default App;
