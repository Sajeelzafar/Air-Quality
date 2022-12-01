import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers/countries';
import citiesReducer from './reducers/cities';


const rootReducer = combineReducers({
    countryReducer,
    citiesReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  
  export default store;