import { EventInfoPropType, TicketInfoPropType } from '@/types/index.t';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventState {
  eventType: string;
  eventInfo: EventInfoPropType;
  eventTags: string[];
  ticketInfo: TicketInfoPropType;
}

const initialEventState: EventState = {
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
    eventLocation: '',
    eventType: '',
    ticketPrice: '',
    availableTickets: 0,
    registrationClose: ''
  }
};

const eventSlice = createSlice({
  name: 'event',
  initialState: initialEventState,
  reducers: {
    setEventType: (state, action: PayloadAction<string>) => {
      state.eventType = action.payload;
    },
    setEventInfo: (state, action: PayloadAction<EventInfoPropType>) => {
      state.eventInfo = action.payload;
    },
    setEventTags: (state, action: PayloadAction<string[]>) => {
      state.eventTags = action.payload;
    },
    setTicketInfo: (state, action: PayloadAction<TicketInfoPropType>) => {
      state.ticketInfo = action.payload;
    },
    resetEventState: () => initialEventState
  }
});

export const { setEventType, setEventInfo, setEventTags, setTicketInfo, resetEventState } =
  eventSlice.actions;
export const eventReducer = eventSlice.reducer;
