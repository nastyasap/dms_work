import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DailyTableType} from '../../api/api';

const initialState = {
    dailyTable: [] as Array<DailyTableType>,
    isLoading: false,
    id: null as null | number
}

export const dailyTableSlice = createSlice({
    name: 'dailyTable',
    initialState: initialState,
    reducers: {
        addRow(state, action: PayloadAction<DailyTableType>) {
            state.dailyTable.push(action.payload)
        },
        loadTableRequest(state, action: PayloadAction<number>) {
            state.isLoading = true
            state.id = action.payload
        }, 
        loadTableSucess(state, action: PayloadAction<DailyTableType[]>) {
            state.isLoading = false
            state.dailyTable = action.payload
        },

    }
})
