import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
const initialEventState = {
  eventType: '',
  eventInfo: {
    eventName: '',
    eventImage: '',
    eventDescription: '',
    eventStartDate: '',
    eventEndDate: '',
    eventStartTime: '',
    eventEndTime: ''
  },
  eventTags: [],
  ticketInfo: {
    eventlocation: '',
    eventType: '',
    ticketPrice: '',
    availableTickets: 0,
    registrationClose: ''
  }
};

// Create the slice
const eventSlice = createSlice({
  name: 'event',
  initialState: initialEventState,
  reducers: {
    setEventType: (state, action: PayloadAction<string>) => {
      state.eventType = action.payload;
    },
    setEventInfo: (state, action: PayloadAction<typeof initialEventState.eventInfo>) => {
      state.eventInfo = action.payload;
    },
    setEventTags: (state, action: PayloadAction<string[]>) => {
      state.eventTags = action.payload as string[];
    },
    setTicketInfo: (state, action: PayloadAction<typeof initialEventState.ticketInfo>) => {
      state.ticketInfo = action.payload;
    }
  }
});

// Export the actions and reducer
export const { setEventType, setEventInfo, setEventTags, setTicketInfo } = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
