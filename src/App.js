import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/navbar"
import Skills from "./components/skills";
import Work from './components/work';
import Contact from './components/contact'
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Carousel/>
      <Contact />
      
      
    </div>
  );
}

export default App;
