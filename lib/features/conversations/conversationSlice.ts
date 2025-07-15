import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface prompt {
  // id: string;
  response: string;
  // time: Date
}

interface ai {
  // id: string;
  response: string;
}

// Define a type for the slice state
interface MessagesState {
  conversation: prompt[];
  response: string;
}

// Define the initial state using that type
const initialState: MessagesState = {
  conversation: [],
  response: "smaple",
};

export const conversationSlice = createSlice({
  name: "conversation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    newMessage: (state, action: PayloadAction<string>) => {
      state.conversation.push({ response: action.payload });
    },
    responseSetter: (state, action) => {
      state.response += action.payload;
    },
  },
});

export const { newMessage, responseSetter } = conversationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) =>
  state.conversation.conversation;

export default conversationSlice.reducer;
