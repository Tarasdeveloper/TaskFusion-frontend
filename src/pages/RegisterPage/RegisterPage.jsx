import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { FormContainer, RegisterPageImage } from './RegisterPage.styled';
import image from './register-page-image.svg';

export const RegisterPage = () => {
  return (
    <FormContainer>
      <RegisterPageImage alt="" src={image} />
      <RegisterForm />
    </FormContainer>
  );
};
