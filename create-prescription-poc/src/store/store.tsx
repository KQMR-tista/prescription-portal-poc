import {configureStore} from '@reduxjs/toolkit'
import prescriberTableReducer from "./prescriberTableSlice/prescriberSlice";


export const stateStore = configureStore({
    reducer: {
        prescriberTableData: prescriberTableReducer,
    },
})

export type RootState = ReturnType<typeof stateStore.getState>;
export type AppDispatch = typeof stateStore.dispatch