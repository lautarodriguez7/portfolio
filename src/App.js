// import react from 'react';
import Navbar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
