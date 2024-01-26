import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/navbar"
import Skills from "./components/skills";
import Work from './components/work';
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
