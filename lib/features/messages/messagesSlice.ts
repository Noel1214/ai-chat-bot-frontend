import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface Message {
  text: string;
}

// Define a type for the slice state
interface MessagesState {
  messages: Message[];
}

// Define the initial state using that type
const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    newMessage: (state, action: PayloadAction<string>) => {
      state.messages.push({ text: action.payload });
    },
  },
});

export const { newMessage } = messagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.messages.messages;

export default messagesSlice.reducer;
