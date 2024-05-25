import { configureStore } from '@reduxjs/toolkit';
import { eventReducer } from './slices/eventSlice';

const store = configureStore({
  reducer: {
    event: eventReducer
  },
  middleware: (customMiddleware) =>
    customMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
