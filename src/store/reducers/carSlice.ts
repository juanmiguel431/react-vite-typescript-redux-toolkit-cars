import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Car } from '../../models';

type State = {
  items: Car[];
  searchTerm: string;
};
const initialState: State = {
  items: [],
  searchTerm: '',
};

const carSlice = createSlice({
  name: 'car',
  initialState: initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Omit<Car, 'id'>>) => {
      state.items.push({ id: nanoid(), ...action.payload });
    },
    deleteCar: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(p => p.id === action.payload);
      state.items.splice(index, 1);
    },
    changeTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  },
});

export default carSlice;
