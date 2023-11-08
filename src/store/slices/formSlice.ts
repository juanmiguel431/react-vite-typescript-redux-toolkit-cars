import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import carSlice from './carSlice.ts';

type State = {
  name: string;
  value: number;
};

const initialState: State = {
  name: '',
  value: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(carSlice.actions.addCar, (state, action) => {
      state.name = '';
      state.value = 0;
    });
  }
});

export default formSlice;
