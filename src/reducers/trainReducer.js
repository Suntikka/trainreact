import constants from '../constants/trainConstants';

const initialState = {
  allTrains: [],
  train: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_ALL_SUCCESS:
      return {
        ...state,
        allTrains: action.payload,
      };
    case constants.GET_LATEST_SUCCESS:
      return {
        ...state,
        train: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
