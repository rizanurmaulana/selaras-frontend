import { Route, Router, Routes } from 'react-router';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/auth/*'>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
