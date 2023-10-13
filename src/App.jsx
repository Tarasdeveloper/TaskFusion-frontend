import { Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/SecondPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import MainPage from './pages/MainPage/MainPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import './fonts.css';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
