import logo from './logo.svg';
import './App.css';
import '../src/assets/css/animate.css'
import '../src/assets/css/tiny-slider.css'
import '../src/assets/css/glightbox.min.css'
import '../src/assets/css/lineicons.css'
import '../src/assets/css/tailwindcss.css'
import Header from '../src/components/Header'
import BrandPart from './components/BrandPart';
import ServicesPart from './components/ServicesPart';
import AboutPart from './components/AboutPart';
import TeamPart from './components/TeamPart';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <BrandPart/>
      <ServicesPart/>
      <AboutPart/>
      <TeamPart/>
      <Footer/>
    </div>
  );
}

export default App;
