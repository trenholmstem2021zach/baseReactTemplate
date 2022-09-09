import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";


const API_URL = "https://jsonplaceholder.typicode.com/todos";


export interface FormState {
    value: any,
    data: any
}

const initialState: FormState = {
    value: {},
    data: {},
}

export const getDataAsync = () => async (dispatch: any) => {
    try {
        const response = await axios.get(`${API_URL}/1`);
        console.log(JSON.stringify(response.data))
        dispatch(getData(response.data));
    } catch (err: any) {
        throw new Error(err);
    }
};

export const formSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        formSave: (state, action) => {
            state.value = JSON.stringify(action.payload);
        },
        getData: (state, action) => {
            console.log("HERE" + action.payload);
            state.data = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { formSave, getData } = formSlice.actions

export default formSlice.reducer