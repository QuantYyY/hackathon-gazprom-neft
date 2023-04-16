import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = '94e7f090610189d358dda5c8321c4e0f3f766a4a';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
}

type resultObject = {
    value: string,
}

export type companySearchObject = {
    label: string;
}

type companySeachState = {
    addressTips: companySearchObject[];
}

const initialState: companySeachState = {
    addressTips: [],
}


export const getAddress = createAsyncThunk<companySearchObject[], string>(
    'location/getLocation',
    async (query) => {
        const response = axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
            {
                query: query,
            },
            config
        ).then((response) => {
            return (response.data.suggestions.map((obj: resultObject) => {
                return {
                    label: obj.value
                }
            }))
        }).catch((error) => {
            console.log(error)
        })
        return response;
    }
)


const companySearchSlice = createSlice({
    name: 'companySearch',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAddress.fulfilled, (state, action) => {
                if (action.payload) {
                    state.addressTips = action.payload
                    console.log(1)
                }
            })

    }
});

export const { } = companySearchSlice.actions;

export default companySearchSlice.reducer;