import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import MainPage from './pages/MainPage/MainPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import AccountPage from './pages/AccountPage/AccountPage';
import MainLayout from './pages/MainLayout/MainLayout';
import CalendarPage from './pages/Calendar/CalendarPage';
import './fonts.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthenticationStatus,
  selectToken,
} from './redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUserThunk } from './redux/auth/operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ChoosedDay } from './components/ChoosedDay/ChoosedDay';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authenticated = useSelector(selectAuthenticationStatus);

  useEffect(() => {
    if (!token || authenticated) return;

    dispatch(refreshUserThunk());
  }, [authenticated, dispatch, token]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/calendar/day" element={<ChoosedDay />} />
        <Route element={<MainLayout />}>
          <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/login">
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route path="calendar/*" element={<CalendarPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
