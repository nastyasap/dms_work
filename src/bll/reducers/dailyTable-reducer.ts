import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DailyTableRow} from '../../api/api';

interface InitialState {
    dailyTable: DailyTableRow[];
    isLoading: boolean;
    id: number | null;    
}
const initialState: InitialState = {
    dailyTable: [],
    isLoading: false,
    id: null,
}

export const EMPTY_DATA: DailyTableRow = {
    rowId: 100000000000,
    autoNumber: null,
    name: null,
    cash: null,
    bort: null,
    washing: null,
    gas: null,
    fuel: null,
    spendings: null,
    avans: null,
    addedDate: new Date().getTime()
}

export const dailyTableSlice = createSlice({
    name: 'dailyTable',
    initialState: initialState,
    reducers: {
        addRow(state, action: PayloadAction<Partial<DailyTableRow>>) {
            const data = {...EMPTY_DATA, ...action.payload}
            state.dailyTable.push(data)
        },
        loadTableRequest(state, action: PayloadAction<number>) {
            state.isLoading = true
            state.id = action.payload
        },
        loadTableSucess(state, action: PayloadAction<DailyTableRow[]>) {
            state.isLoading = false
            state.dailyTable = [...action.payload, EMPTY_DATA]
        },
        updateRow(state, action: PayloadAction<{ data: Partial<DailyTableRow>, rowId: number }>) {
            const index = state.dailyTable.findIndex(obj => obj.rowId === action.payload.rowId)
            state.dailyTable[index] = {...state.dailyTable[index], ...action.payload.data}
        }

    }
})
