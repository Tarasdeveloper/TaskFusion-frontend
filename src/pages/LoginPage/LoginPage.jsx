import { LoginForm } from '../../components/LoginForm/LoginForm';
import { FormContainer } from '../RegisterPage/RegisterPage.styled';
import { LoginPageImage } from './LoginPage.styled';

import image from './login-page-image.svg';

export const LoginPage = () => {
  return (
    <FormContainer>
      <LoginPageImage alt="" src={image} />
      <LoginForm />
    </FormContainer>
  );
};
