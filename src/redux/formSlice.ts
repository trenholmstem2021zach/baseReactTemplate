import { createSlice } from '@reduxjs/toolkit'

export interface FormState {
    value: any
}

const initialState: FormState = {
    value: {},
}

export const formSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        formSave: (state, action) => {
            state.value = JSON.stringify(action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { formSave } = formSlice.actions

export default formSlice.reducer