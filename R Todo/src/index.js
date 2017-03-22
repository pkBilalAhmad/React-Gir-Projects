import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import allReducers from './reducers/allReducers'
import { Provider } from 'react-redux'
const store = createStore(allReducers, applyMiddleware(createLogger()))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)