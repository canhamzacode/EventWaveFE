import { configureStore } from '@reduxjs/toolkit';
import { eventReducer } from './slices/eventSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    auth: authReducer
  },
  middleware: (customMiddleware) =>
    customMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
