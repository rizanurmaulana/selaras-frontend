import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/auth/forgot-password' element={<ForgotPassword />} />
      <Route path='/auth/reset-password' element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>,
);
