import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type selectedItem = "Все" | "Рабочая среда" | "Библиотеки" | "Пройденые" | "Не пройденные";

type catalogState = {
    selectedItem: selectedItem;
}

const initialState: catalogState = {
    selectedItem: "Все",
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

