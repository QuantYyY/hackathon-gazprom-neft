import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = '94e7f090610189d358dda5c8321c4e0f3f766a4a';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
}


export type resultObject = {
    data: {
        address: {
            value: string;
        };
        inn: string;
        state: {
            status: 'ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED' | 'BANKRUPT' | 'REORGANIZING';
            registration_date: number;
            liquidation_date: number;
        };
        founders: {
            name: string;
        }[];
    }
    value: string;
    unrestricted_value: string;
}


type companySearchState = {
    companyTips: resultObject[];
    currentCompany: resultObject | null;
    companyList: resultObject[];
}

const initialState: companySearchState = {
    companyTips: [],
    currentCompany: null,
    companyList: [],
}


export const getCompany = createAsyncThunk<resultObject[], string>(
    'location/getCompany',
    async (query) => {
        const response = await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
            {
                query: query,
            },
            config
        ).then((response) => {
            return response.data.suggestions;
        }).catch((error) => {
            console.log(error)
        })
        return response;
    }
)

export const getCompanyUseINN = createAsyncThunk<resultObject[]>(
    'location/getCompanyINN',
    async (query) => {
        const response = axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
            {
                query: query,
            },
            config
        ).then((response) => {
            console.log(response.data.suggestions)
            return response.data.suggestions;
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

        setCurrentCompany(state, action: PayloadAction<resultObject>) {
            if (action.payload) {
                state.currentCompany = action.payload;
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCompany.fulfilled, (state, action: PayloadAction<resultObject[]>) => {
                if (action.payload) {
                    state.companyTips = action.payload;
                }
            })
            .addCase(getCompanyUseINN.fulfilled, (state, action: PayloadAction<resultObject[]>) => {
                if (action.payload) {
                    state.companyList = action.payload;
                }
            })

    }
});

export const { setCurrentCompany } = companySearchSlice.actions;

export default companySearchSlice.reducer;