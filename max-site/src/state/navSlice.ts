import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type NavLocation = "blog" | "about" | "home" | "other";
// Define a type for the slice state
export interface NavState {
  currentLocation: NavLocation;
}

// Define the initial state using that type
const initialState: NavState = {
  currentLocation: "other"
};

export const navSlice = createSlice({
  name: "nav",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLocationTo: (state, action: PayloadAction<NavLocation>) => {
      state.currentLocation = action.payload;
    }
  }
});

export const { setLocationTo } = navSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLocation = (state: RootState) => state.nav.currentLocation;

export default navSlice.reducer;