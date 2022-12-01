import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://restcountries.com/v3.1/all";

export const fetchCountries = createAsyncThunk(
    'FETCH',
    async () => {
      const data = await (fetch(url)).then((res) => res.json());
      const response = data.map((country) => ({
        name: country.name.common,
        countrycode: country.cca2,
        region: country.region,
        flag: country.flags.svg,
      }));
      return response;
    },
  );

export const filteredCountries = (data = "") => (
    {
        type: "FILTER",
        payload: data,
    }
)

const countryReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH/fulfilled': {
        return action.payload;
      }

      case 'FILTER': {
        let newState = state.filter((el) => el.name.toString().toLowerCase().includes(action.payload.toString().toLowerCase()))
        return newState;
      }
    
      default:
      return state;

    }
}

export default countryReducer;