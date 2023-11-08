import { configureStore } from '@reduxjs/toolkit';
import carSlice from './reducers/carSlice.ts';
import formSlice from './reducers/formSlice.ts';
import * as actions from './actions.ts';

export const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    songs: formSlice.reducer,
  }
});

export const actionCreators = {
  ...carSlice.actions,
  ...formSlice.actions,
  ...actions
};

//https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
