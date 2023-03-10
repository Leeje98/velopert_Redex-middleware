import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { applyMiddleware, createStore } from 'redux';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';   // 콘솔창 확인
import { composeWithDevTools } from 'redux-devtools-extension';  // 개발자도구 -> Redux 창 확인


const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(logger))
);  // 여러개의 미들웨어 적용가능

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
