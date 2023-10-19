import { useFormik } from 'formik';
import { registerSchema } from '../../schemas';
import {
  ErrorText,
  Form,
  FormBtn,
  FormInput,
  FormInputContainer,
  FormInputLabel,
  FormInputWrap,
  FormTitle,
} from './RegisterForm.styled';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../redux/auth/selectors';

export const RegisterForm = () => {
  const authError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleRegFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      registerThunk({
        name,
        email,
        password,
      }),
    );
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: registerSchema,
    });
  
    const isFormValid = () => {
      return (
        Object.keys(errors).length === 0 && Object.keys(touched).length > 0
      );
    };
  
  return (
    <Form onSubmit={handleRegFormSubmit}>
      <FormTitle>Sign up</FormTitle>
      <FormInputContainer>
        <FormInputWrap>
          <FormInputLabel htmlFor="name">Name</FormInputLabel>
          <FormInput
            id="name"
            name="name"
            placeholder="Enter your name"
            type="text"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'input-error' : ''}
          />
          {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
        </FormInputWrap>
        <FormInputWrap>
          <FormInputLabel htmlFor="email">Email</FormInputLabel>
          <FormInput
            id="email"
            name="email"
            placeholder="Enter email"
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
            placeholder="Enter password"
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
        <span>Sign Up</span>
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
      {authError && <ErrorText>{authError}</ErrorText>}
    </Form>
  );
};
