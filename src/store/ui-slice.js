import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export default uiSlice;