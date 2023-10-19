import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import {
  ErrorText,
  Form,
  FormBtn,
  FormInput,
  FormInputContainer,
  FormInputLabel,
  FormInputWrap,
  FormTitle,
} from '../RegisterForm/RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';

export const LoginForm = () => {
  const authError = useSelector(selectError);
  console.log('authError: ', authError);

  const dispatch = useDispatch();

  const handleLogFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      loginThunk({
        email,
        password,
      }),
    );
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
    });

  const isFormValid = () => {
    return Object.keys(errors).length === 0 && Object.keys(touched).length > 0;
  };

  return (
    <Form onSubmit={handleLogFormSubmit}>
      <FormTitle>Log In</FormTitle>
      <FormInputContainer>
        <FormInputWrap>
          <FormInputLabel htmlFor="email">Email</FormInputLabel>
          <FormInput
            id="email"
            name="email"
            placeholder="nadiia@gmail.com"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          {errors.email && touched.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
        </FormInputWrap>
        <FormInputWrap>
          <FormInputLabel htmlFor="password">Password</FormInputLabel>
          <FormInput
            id="password"
            name="password"
            placeholder="•••••••"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
        </FormInputWrap>
      </FormInputContainer>

      <FormBtn disabled={!isFormValid() || isSubmitting} type="submit">
        <span>Log in</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5M8.33333 5.83333L12.5 10M12.5 10L8.33333 14.1667M12.5 10L2.5 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FormBtn>
      {authError === 'Request failed with status code 401' && (
        <ErrorText>Email or password is wrong</ErrorText>
      )}
      {authError && authError !== 'Request failed with status code 401' && (
        <ErrorText>{authError}</ErrorText>
      )}
    </Form>
  );
};
