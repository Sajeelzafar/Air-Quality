import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://countriesnow.space/api/v0.1/countries/cities";
// const urlLatLon = "http://api.openweathermap.org/geo/1.0/direct?q=London,GB&limit=5&appid=aff53bd7154a6d1faefb6b53deac0c16";

export const fetchCities = createAsyncThunk (
    'FETCH_CITY',
    async (city) => {
        const data = await (fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                country: city,
            }),
          }).then((res) => res.json())
            .then((output) => output))
        return data;
    }
)

export const fetchLatLon = createAsyncThunk (
    'FETCH_LATLON',
    // async () => {
    //     const data = await (fetch(urlLatLon)).then((res) => res.json());
    //     console.log(data);
    //     return data;
    // }
)

const citiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CITY/fulfilled': {
          return action.payload;
        }

        case 'FETCH_LATLON/fulfilled': {
            console.log(action.payload);
            return state;
        }
      
        default:
        return state;
  
      }
}

export default citiesReducer;