import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { loginSchema } from '../../schemas';
import {
  UpdateTokenThunk,
  loginThunk,
  refreshUserThunk,
} from '../../redux/auth/operations';
import { selectError, selectIsLoadingStatus } from '../../redux/auth/selectors';
import { Loader } from '../Loader/Loader';

import {
  ErrorText,
  EyeIcon,
  Form,
  FormBtn,
  FormGoogleBtn,
  FormInput,
  FormInputContainer,
  FormInputLabel,
  FormInputWrap,
  FormTitle,
  GoogleIconWrapper,
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const authError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoadingStatus);
  const [searchParams] = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const token = searchParams.get('token') ?? '';
    if (token) {
      dispatch(UpdateTokenThunk(token));
      dispatch(refreshUserThunk());
    }
  }, [dispatch, searchParams]);
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
    const hasErrors = Object.keys(errors).length > 0;
    const isNotEmpty = Object.values(values).every(
      (value) => value.trim() !== '',
    );

    return !hasErrors && isNotEmpty && Object.keys(touched).length > 0;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isLoading) return <Loader></Loader>;
  else
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
              className={
                (errors.email && touched.email ? 'input-error ' : '') +
                (touched.email && !errors.email ? 'input-success' : '')
              }
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
          </FormInputWrap>
          <FormInputWrap className="password">
            <FormInputLabel htmlFor="password">Password</FormInputLabel>
            <FormInput
              id="password"
              name="password"
              placeholder="•••••••"
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={
                (errors.password && touched.password ? 'input-error ' : '') +
                (touched.password && !errors.password ? 'input-success' : '')
              }
            />
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}
            {values.password && (
              <EyeIcon onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      clipRule="evenodd"
                      d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                    <path
                      d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z"
                      fill="#000000"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      clipRule="evenodd"
                      d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                    <path
                      clipRule="evenodd"
                      d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                )}
              </EyeIcon>
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
        <FormGoogleBtn href="https://taskfusion-service.onrender.com/auth/google">
          <GoogleIconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28px"
              height="28px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </GoogleIconWrapper>

          <span>Continue with Google</span>
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
        </FormGoogleBtn>
        {authError === 'Request failed with status code 401' && (
          <ErrorText>Email or password is wrong</ErrorText>
        )}
        {authError && authError !== 'Request failed with status code 401' && (
          <ErrorText>{authError}</ErrorText>
        )}
      </Form>
    );
};
