import { Route, Router, Routes } from 'react-router';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/auth/forgot-password' element={<ForgotPassword />} />
      <Route path='/auth/reset-password' element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
