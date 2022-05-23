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
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Login/PrivateRoute';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfil from './Pages/Dashboard/MyProfil';
import AllUsers from './Pages/Dashboard/AllUsers';
import SingleService from './Pages/SingleService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateAdmin from './Login/PrivateAdmin';

function App() {
 
  useEffect( ()=>{
    AOS.init();
  },[])
  return (
    <div>
       <Navbar></Navbar>
       <ToastContainer />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singleservice/:id" element={<PrivateRoute><SingleService /></PrivateRoute>} />

        <Route  path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofil' element={<MyProfil></MyProfil>}></Route>
          <Route path='allusers' element={<PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>}></Route>
        </Route>
         
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
