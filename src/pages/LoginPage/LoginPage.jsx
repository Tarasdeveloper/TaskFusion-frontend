import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { selectAuthenticationStatus } from '../../redux/auth/selectors';
import { FormContainer } from '../RegisterPage/RegisterPage.styled';
import { LoginPageImage } from './LoginPage.styled';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';

import image from './login-page-image.svg';

export const LoginPage = () => {
  const authenticated = useSelector(selectAuthenticationStatus);

  const route = '/register';
  const content = 'Sign up';

  if (authenticated) return <Navigate to="/calendar" />;

  return (
    <FormContainer>
      <LoginPageImage alt="" src={image} />
      <LoginForm />
      <AuthNavigate route={route} content={content} />
    </FormContainer>
  );
};
