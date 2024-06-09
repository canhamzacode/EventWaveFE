import * as yup from 'yup';

const emailError = 'Your Email is Required, ensure it is the Correct Format';

export const signInSchema = yup.object().shape({
  email: yup.string().email().required(emailError),
  password: yup.string().min(8).required('Password is a required field')
});

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required(emailError),
  password: yup.string().min(8).required('Password is a required field')
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email().required(emailError)
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).required('Password Is A Required Field'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match')
});

export const filterSchema = yup.object().shape({
  location: yup.string(),
  date: yup.string(),
  eventType: yup.string(),
  eventPricing: yup.string()
});

const createEventShape = {
  eventName: yup.string().required('Event Name Is A Required Field'),
  eventImage: yup.string(),
  eventDescription: yup.string().required('Event Description is Required'),
  eventStartDate: yup.date().required('Event Start Date is Required'),
  eventEndDate: yup.date().required('Event End Date is Required'),
  eventStartTime: yup
    .string()
    .required('Event Start Time is Required')
    .matches(/^([01]?\d|2[0-3]):[0-5]\d$/, 'Invalid time format. Please use HH:MM format'),
  eventEndTime: yup
    .string()
    .required('Event End Time is Required')
    .matches(/^([01]?\d|2[0-3]):[0-5]\d$/, 'Invalid time format. Please use HH:MM format')
};

const ticketInfoShape = {
  eventLocation: yup.string().required('Event Location Is Required'),
  eventType: yup.string().required('Event Type is Required'),
  ticketPrice: yup.string().required('Ticket Price is Required'),
  availableTickets: yup.number().required('Available ticket is required'),
  registrationClose: yup.date().required('Registration Closeing date is required')
};

const registerEventShape = {
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Required'),
  email: yup.string().email().required('Email is Required'),
  phoneNumber: yup.string().required('Phone Number is Required'),
  ticketQuantity: yup.number().required('Ticket Quantity is Required'),
  gender: yup.string(),
  howDidYouHear: yup.string(),
  paymentMethod: yup.string().required('Payment Method is Required')
};

export const createEventSchema = yup.object().shape(createEventShape);

export const ticketInfoSchema = yup.object().shape(ticketInfoShape);

export const registerEventSchema = yup.object().shape(registerEventShape);

export const eventCreationSchema = yup
  .object()
  .shape({ ...createEventShape, ...ticketInfoShape, eventTags: yup.array() });
