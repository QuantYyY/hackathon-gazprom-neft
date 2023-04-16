import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type selectedTab = "Моё обучение" | "Задачи" | "Локация" | "Запросы к API";

type headerState = {
    selectedTab: selectedTab,
}

const initialState: headerState = {
    selectedTab: "Запросы к API",
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeHeaderTab(state, action: PayloadAction<selectedTab>){
            state.selectedTab = action.payload;
        }
    },
});


export const { changeHeaderTab } = headerSlice.actions;

export default headerSlice.reducer;
