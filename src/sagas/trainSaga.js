import { call, put, takeLatest } from 'redux-saga/effects';
import constants from '../constants/trainConstants';
import service from '../services/trainService';

function* getAll() {
  try {
    const response = yield call(service.getAll);
    yield put({ type: constants.GET_ALL_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: constants.GET_ALL_FAILURE, message: error.message });
  }
}

function* getAllRequest() {
  yield takeLatest(constants.GET_ALL_REQUEST, getAll);
}

const sagas = {
  getAllRequest,
};
export default sagas;
