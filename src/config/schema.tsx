import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup.string().email().required('Your Email is Required, ensure it is the Correct Format'),
  password: yup.string().min(8).required('Password Is A Required Field')
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email().required('Your Email is Required, ensure it is the Correct Format')
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).required('Password Is A Required Field'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match')
});
