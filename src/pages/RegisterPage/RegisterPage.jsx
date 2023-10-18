import { useSelector } from 'react-redux';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { FormContainer, RegisterPageImage } from './RegisterPage.styled';
import image from './register-page-image.svg';
import { selectRegisteredStatus } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const RegisterPage = () => {
  const registered = useSelector(selectRegisteredStatus);
  if (registered) return <Navigate to="/login" />;
  return (
    <FormContainer>
      <RegisterPageImage alt="" src={image} />
      <RegisterForm />
    </FormContainer>
  );
};
