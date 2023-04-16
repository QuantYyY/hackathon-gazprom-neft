import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type selectedItem = "Все" | "Рабочая среда" | "Библиотеки" | "Пройденые" | "Не пройденные";

type catalogState = {
    selectedItem: selectedItem;
}

const initialState: catalogState = {
    selectedItem: "Все",
}

const token = '94e7f090610189d358dda5c8321c4e0f3f766a4a';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        changeCatalogItem(state, action: PayloadAction<selectedItem>){
            state.selectedItem = action.payload;
        }
    },
});

export const { changeCatalogItem } = catalogSlice.actions;

export default catalogSlice.reducer;

