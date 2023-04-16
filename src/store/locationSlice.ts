import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type coordinates = {
    lat: number,
    lon: number
}

export type locationState = {
    country: string | null,
    city: string | null,
    coordinates: coordinates | null,
}

const initialState: locationState = {
    country: null,
    city: null,
    coordinates: null,
}

const token = '94e7f090610189d358dda5c8321c4e0f3f766a4a';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
}


export const getLocation = createAsyncThunk<any, coordinates>(
    'location/getLocation',

    async (coord) => {
        const response = axios.post('http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address',
            {
                lat: coord.lat,
                lon: coord.lon,
                count: 1,
            },
            config
        ).then((response) => {
            if (response.data.suggestions[0].data) {
                return response.data.suggestions[0].data;
            }
        }).catch((error) => {
            console.log(error)
        })
        return response;
    }
)


const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getLocation.fulfilled, (state, action) => {
                if (action.payload) {
                    state.country = action.payload.country;
                    state.city = action.payload.city;
                    state.coordinates = {
                        lat: action.payload.geo_lat,
                        lon: action.payload.geo_lon
                    }
                }
            })
    }
});

export const { } = locationSlice.actions;

export default locationSlice.reducer;