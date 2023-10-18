import { useSelector } from 'react-redux';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { FormContainer, RegisterPageImage } from './RegisterPage.styled';
import image from './register-page-image.svg';
import {
  selectAuthenticationStatus,
} from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';

export const RegisterPage = () => {
  const authenticated = useSelector(selectAuthenticationStatus);

  const route = '/login';
  const content = 'Log In';

  if (authenticated) return <Navigate to="/account" />;
  return (
    <FormContainer>
      <RegisterPageImage alt="" src={image} />
      <RegisterForm />
      <AuthNavigate route={route} content={content} />
    </FormContainer>
  );
};
