import { createSlice } from "@reduxjs/toolkit";

type proposedWayState = {
    hidden: boolean;
}

const initialState: proposedWayState = {
    hidden: false,
}


const proposedWaySlice = createSlice({
    name: 'proposed',
    initialState,
    reducers: {
        changeHidden(state){
            state.hidden = !state.hidden;
        }
    },
    
})

export const { changeHidden } = proposedWaySlice.actions;

export default proposedWaySlice.reducer;