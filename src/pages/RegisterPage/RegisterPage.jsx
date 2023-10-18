import { useSelector } from 'react-redux';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { FormContainer, RegisterPageImage } from './RegisterPage.styled';
import image from './register-page-image.svg';
import {
  selectAuthenticationStatus,
  selectRegisteredStatus,
} from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';

export const RegisterPage = () => {
  const registered = useSelector(selectRegisteredStatus);
  const authenticated = useSelector(selectAuthenticationStatus);

  const route = '/login';
  const content = 'Log In';

  if (registered || authenticated) return <Navigate to="/login" />;
  return (
    <FormContainer>
      <RegisterPageImage alt="" src={image} />
      <RegisterForm />
      <AuthNavigate route={route} content={content} />
    </FormContainer>
  );
};
