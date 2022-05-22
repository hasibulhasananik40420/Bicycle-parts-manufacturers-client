import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Singup from './Login/Singup';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect( ()=>{
    AOS.init();
  },[])
  return (
    <div>
       <Navbar></Navbar>
        
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
