import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./pages/Home"
import  Projects  from "./pages/Projects"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
