import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig';
import AppReduxSaga from './AppReduxSaga'

const root = ReactDOM.createRoot(document.getElementById('root'));

let AppAsyncStore = createAppAsyncStore(); 

root.render(
  // normal
  // <Provider store={createAppStore()}>
  // asincrona
  <Provider store={AppAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
