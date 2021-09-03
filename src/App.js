// import react from 'react';
import Navbar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
