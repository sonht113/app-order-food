import authSaga from 'features/auth/authSaga';
import { all } from 'redux-saga/effects';
import counterSaga from '../features/counter/counterSaga';

function* helloSaga() {
  console.log('Hello saga');
}

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([helloSaga(), authSaga(), counterSaga()]);
}
