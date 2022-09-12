import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { messageReducer } from './state/messageReducer';
// import { anotherComponentReducer } from './state/anotherComponentReducer';
import counterReducer from './state/counterReducer';
// import { createNamedWrapperReducer } from './state/namedWrapperReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({

  reducer: {
    // message: messageReducer,
    // another: anotherComponentReducer,
    counter: counterReducer
    // counterDone: createNamedWrapperReducer(counterReducer, 'Done'),
    // counterWillDo: createNamedWrapperReducer(counter, 'WillDo'),
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
