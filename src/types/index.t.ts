import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

export interface CustomInputPropType {
  type: string;
  placeholder?: string;
  register: (name: string) => UseFormRegisterReturn;
  name: string;
  errors: FieldErrors<{ [x: string]: string }>;
  label: string;
  customStyle?: string;
  readonly?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomTextAreaProps {
  placeholder: string;
  register: (name: string) => UseFormRegisterReturn;
  name: string;
  errors: FieldErrors<{ [x: string]: string }>;
  label: string;
  customStyle?: string;
  readonly?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface CustomSelectInputPropType {
  options: { value: string; label: string }[];
  register: (name: string) => UseFormRegisterReturn;
  name: string;
  errors: FieldErrors<{ [x: string]: string }>;
  label: string;
  customStyle?: string;
}

export interface EventInfoPropType {
  eventName: string;
  eventImage: string;
  eventDescription: string;
  eventStartDate: string;
  eventEndDate: string;
  eventStartTime: string;
  eventEndTime: string;
}

export interface TicketInfoPropType {
  eventLocation: string;
  eventType: string;
  ticketPrice: string;
  availableTickets: number;
  registrationClose: string;
}
