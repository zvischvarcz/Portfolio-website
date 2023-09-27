import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./pages/Home"
import  Projects  from "./pages/Projects"
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
