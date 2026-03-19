import './App.css'
import { ContextProvider } from './context/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Menu from "./pages/menu/menu";
import Cart from './pages/cart/cart';
import Footer from './components/footer';
import Booking from './components/booking';
import AdminDashboard from './pages/AdminDashboard';
import AdminLoginReg from './pages/AdminLoginReg';
import AdminAddMenu from './pages/AdminAddMenu';
import MenuList from "./pages/menu/menulist";
import Checkout from './pages/cart/Checkout';
import AdminOrders from './pages/AdminOrders';
import Invoice from './pages/cart/Invoice';
import OrderStatus from './pages/cart/OrderStatus';
import OrderStatusSearch from "./pages/OrderStatusSearch";
import OrderReport from './pages/OrderReport';


const App = () => {
  return (
    <>
    <Router>
       <ContextProvider>
        
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/AdminLoginReg' element={<AdminLoginReg />} />
            <Route path='admin/addmenu' element={<AdminAddMenu />} />
            <Route path='admin/menulist' element={<MenuList />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/order/:id" element={<OrderStatus />} />
            <Route path="/order-status" element={<OrderStatusSearch />} />
            <Route path="/admin/order-report" element={<OrderReport />} />


          </Routes> 
          <Footer />
       
      </ContextProvider>
       </Router>
    </>
  )
}

export default App;
