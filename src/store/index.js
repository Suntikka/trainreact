import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import trainReducer from '../reducers/trainReducer';

// Sagas
import trainSagas from '../sagas/trainSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  trainReducer,
  applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(trainSagas.getAllRequest);

export default store;
