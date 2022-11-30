import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/city';

const rootReducer = combineReducers({
    cityReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;