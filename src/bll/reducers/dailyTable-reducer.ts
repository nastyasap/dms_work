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

const NEW_ROW_ID = 100000000

export const EMPTY_DATA: DailyTableRow = {
    rowId: NEW_ROW_ID,
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
        loadTableRequest(state, action: PayloadAction<{date:string, isMorning: number}>) {
            state.isLoading = true
        },
        loadTableSuccess(state, action: PayloadAction<DailyTableRow[]>) {
            state.isLoading = false
            state.dailyTable = [...action.payload, EMPTY_DATA]
        },
        addRow(state, action: PayloadAction<Partial<DailyTableRow>>) {
            const data = {...EMPTY_DATA, ...action.payload}
            state.dailyTable.push(data)
        },
        updateRow(state, action: PayloadAction<{ data: Partial<DailyTableRow>, rowId: number }>) {
            const index = state.dailyTable.findIndex(obj => obj.rowId === action.payload.rowId)
            state.dailyTable[index] = {...state.dailyTable[index], ...action.payload.data}
        }

    }
})
