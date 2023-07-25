import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Contact from './components/Contact';
import About from './components/About';
import ResultForm from './components/ResultForm';

function App() {
  return (
    <div className="App bg-black">
      <BrowserRouter >
      <Navbar />
      <Routes >
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result/:code" element={<ResultForm />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
