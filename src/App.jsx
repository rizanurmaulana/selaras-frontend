import { Route, Routes } from 'react-router';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Home from './pages/Home';
import ProductOrders from './pages/profile/Orders';
import ProductWishlist from './pages/profile/Wishlist';
import ProfileAddress from './pages/profile/Address';
import ChangePassword from './pages/profile/ChangePassword';
import Account from './pages/profile/Account';
import Products from './pages/products/Products';
import ProductDetails from './pages/products/ProductDetails';
import About from './pages/about/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/auth/*'>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
      </Route>
      <Route path='/product/*'>
        <Route index element={<Products />} />
        <Route path=':id' element={<ProductDetails />} />
      </Route>
      <Route path='/profile/*'>
        <Route index element={<ProductOrders />} />
        <Route path='orders' element={<ProductOrders />} />
        <Route path='wishlist' element={<ProductWishlist />} />
        <Route path='address' element={<ProfileAddress />} />
        <Route path='change-password' element={<ChangePassword />} />
        <Route path='account' element={<Account />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
