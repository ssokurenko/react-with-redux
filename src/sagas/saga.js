
import { takeLatest, put, delay } from 'redux-saga/effects';

const randomDelay = () => delay(Math.random() * 1000);

function* asyncAgeChange(action) {

  yield randomDelay();

  switch(action.payload) {
    case('up'):
    yield put ({type: 'AGE_UP_ASYNC'});
    break;

    case('down'):
    yield put({type: 'AGE_DOWN_ASYNC'});
    break;

    default:
    break;
  }
  
}

export function* watchAgeUp() {
  yield takeLatest('AGE_CHANGE', asyncAgeChange)
}
