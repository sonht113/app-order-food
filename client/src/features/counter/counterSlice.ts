import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

const counterSliced = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
})

export const {increment, decrement} = counterSliced.actions
// @ts-ignore
export const selectCount = ((state: RootState) => state.counter.value)
export default counterSliced.reducer;

