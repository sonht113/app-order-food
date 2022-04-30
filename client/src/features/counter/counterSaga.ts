import { takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { increment } from './counterSlice';

function* Log(action: PayloadAction) {
  console.log('Log', action.type);
}

export default function* counterSaga() {
  console.log('Counter saga');
  yield takeEvery(increment().type, Log);
}
