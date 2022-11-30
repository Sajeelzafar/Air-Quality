import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;