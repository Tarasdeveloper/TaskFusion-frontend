import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import MainPage from './pages/MainPage/MainPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import AccountPage from './pages/AccountPage/AccountPage';

import './fonts.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticationStatus, selectToken } from './redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUserThunk } from './redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isAuthenticated = useSelector(selectAuthenticationStatus);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [dispatch, token])

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
