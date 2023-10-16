import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const emailRules =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const registerSchema = yup.object().shape({
  name: yup.string().min(2).required('required field'),
  email: yup
    .string()
    .email('This is an ERROR email')
    .matches(emailRules)
    .required('required field'),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, {
      message:
        'Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.',
    })
    .required('required field'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is an ERROR email')
    .required('required field'),
  password: yup.string().required('required field'),
});
