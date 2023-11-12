import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one numeric digit')
    .matches(/^[a-zA-Z0-9]*$/, 'Password must be alphanumeric')
    .required('Password is required'),
});

export default loginValidationSchema;
