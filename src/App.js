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
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyProtfolio from './Pages/MyProtfolio';
import EditProfil from './Pages/EditProfil';
import Payment from './Pages/Dashboard/Payment';
import AllProducts from './Pages/AllProducts/AllProducts';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myprotfolio" element={<MyProtfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singleservice/:id" element={<PrivateRoute><SingleService /></PrivateRoute>} />
        <Route path="/allproducts" element={<AllProducts />} />

        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
          <Route index element={<MyProfil></MyProfil>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allusers' element={<PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>}></Route>
          <Route path='manageallorders' element={<PrivateAdmin><ManageAllOrder></ManageAllOrder></PrivateAdmin>}></Route>
          <Route path='addproduct' element={<PrivateAdmin><AddProduct></AddProduct></PrivateAdmin>}></Route>
          <Route path='manageproducts' element={<PrivateAdmin><ManageProducts></ManageProducts></PrivateAdmin>}></Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
