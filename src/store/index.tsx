import { configureStore } from '@reduxjs/toolkit';
import proposedWayReducer from './proposedWaySlice';
import catalogReducer from './catalogSlice';
import headerReducer from './headerSlice';
import locationReducer from './locationSlice';
import companySearchReducer from './companySearchSlice';


const store = configureStore({
    reducer: {
        proposedWay: proposedWayReducer,
        catalog: catalogReducer,
        header: headerReducer,
        location: locationReducer,
        companySearch: companySearchReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;