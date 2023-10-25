import { useSelector } from 'react-redux';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { selectAuthenticationStatus } from '../../redux/auth/selectors';
import { FormContainer } from '../RegisterPage/RegisterPage.styled';
import { LoginPageImage } from './LoginPage.styled';

import image from './login-page-image.svg';
import { Navigate } from 'react-router-dom';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';

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
