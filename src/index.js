import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { watchAgeUp } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAgeUp)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

