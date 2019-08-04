import constants from '../constants/trainConstants';

const actions = {
  getAllFailure: error => ({ type: constants.GET_ALL_FAILURE, payload: error }),
  getAllRequest: () => ({ type: constants.GET_ALL_REQUEST }),
  getAllSuccess: trains => ({ type: constants.GET_ALL_SUCCESS, payload: trains }),
  getLatestFailure: error => ({ type: constants.GET_LATEST_FAILURE, payload: error }),
  getLatestRequest: () => ({ type: constants.GET_LATEST_REQUEST }),
  getLatestSuccess: train => ({ type: constants.GET_LATEST_SUCCESS, payload: train }),
};
export default actions;
