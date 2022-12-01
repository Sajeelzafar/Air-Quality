import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers/countries';

const rootReducer = combineReducers({
    countryReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;