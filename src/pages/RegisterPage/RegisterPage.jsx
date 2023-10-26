import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { selectAuthenticationStatus } from '../../redux/auth/selectors';

import { FormContainer, RegisterPageImage } from './RegisterPage.styled';

import image from './register-page-image.svg';

export const RegisterPage = () => {
  const authenticated = useSelector(selectAuthenticationStatus);

  const route = '/login';
  const content = 'Log In';

  if (authenticated) return <Navigate to="/calendar" />;
  return (
    <FormContainer>
      <RegisterPageImage alt="" src={image} />
      <RegisterForm />
      <AuthNavigate route={route} content={content} />
    </FormContainer>
  );
};
