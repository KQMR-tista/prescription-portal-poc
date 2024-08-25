import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const GET_PRESCRIBER_END_POINT = 'http://localhost:4000/getPrescribers';
const ADD_PRESCRIBER_END_POINT = 'http://localhost:4000/addPrescriber';

export interface PrescriberTableEntry {
    id?: number,
    prescriberId?: number;
    prescriberName?: string;
    prescriberAddress?: PrescriberAddress;
    prescriberEmail?: string;
    prescriberType?: string;
}

interface PrescriberAddress {
    addressLine?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}

interface PrescriberTableApiState {
    getPrescriberData: PrescriberTableEntry[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: PrescriberTableApiState = {
    isLoading: false,
    isError: false,
    getPrescriberData: []

};

export const prescriberTableSlice = createSlice({
        name: 'prescriberTable',
        initialState,
        /* Use these for sync stuff */
        reducers: {
            // getPrescriberTableData: (state, action: PayloadAction<PrescriberTableEntry>) => {
            //     state = [action.payload];
            //     return state;
            // }
        },
        /* Use these for asynchronous stuff */
        extraReducers: (builder) => {
            builder.addCase(getAllPrescribers.pending, (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(getAllPrescribers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getPrescriberData = action.payload as unknown as PrescriberTableEntry[];
            })
            builder.addCase(getAllPrescribers.rejected, (state, action) => {
                state.isError = true;
            })


            builder.addCase(addPrescriber.pending, (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(addPrescriber.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getPrescriberData = action.payload as unknown as PrescriberTableEntry[];
            })
            builder.addCase(addPrescriber.rejected, (state, action) => {
                state.isError = true;
            })
        }
    }
)

export const getAllPrescribers = createAsyncThunk("getPrescribers", async () => {
    let response = await axios.get(`${GET_PRESCRIBER_END_POINT}`);
    return response.data;
});


export const addPrescriber = createAsyncThunk("addPrescriber", async (data) => {
    let response = await axios.post(`${ADD_PRESCRIBER_END_POINT}`, data);
    return response.data;
});

/*export const {getAllPrescribers} = prescriberTableSlice.actions; */
export default prescriberTableSlice.reducer;
