import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
// import toDoSlice from './comp/toDoPage/store/toDoSlice';
import ToDoSlice from './store/toDoSlice'
import { Provider } from 'react-redux';
import PostSlice from './store/postSlice';
// import UsersSlice from './store/usersSlice';

import UserSlice from './store/UsersSlice'
const root = ReactDOM.createRoot(document.getElementById('root'));

const myStore = configureStore({
  
  reducer: {
    ToDoSlice,
    PostSlice,
    UserSlice
    
  }
})
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
