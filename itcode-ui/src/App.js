import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Contact from './components/Contact';
import About from './components/About';
import ResultForm from './components/ResultForm';
import Registration from './components/Registration';
import Login from './components/Login';

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
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
