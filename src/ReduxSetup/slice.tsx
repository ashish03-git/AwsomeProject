import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import store from "./store";

interface NotesTypeProps {
  heading: string;
  description: string;
}

// here we are defining tht the intialstate of the slice would be of NotesTypeProps means this wiil accept heading and description
const initialState: Array<NotesTypeProps> = [];

const Slice = createSlice({
  name: "userDetails",
  // because instead of defining here we have declared the inital state above the function so it will okay
  initialState,
  reducers: {
    // in this line we are defing  the payload type means it will accep NoteTypeProps data in payload
    addNotes: (state, action: PayloadAction<NotesTypeProps>) => {
      state.push(action.payload);
      console.log(state);
    },
  },
});

export const { addNotes } = Slice.actions;

// this will be used to create type of the store
export const noteSelector = (state: RootState) => state.notes;
export default Slice.reducer;
