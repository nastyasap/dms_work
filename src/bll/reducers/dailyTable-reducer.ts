import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DailyTableType} from '../../api/api';

interface InitialState {
    dailyTable: DailyTableType[];
    isLoading: boolean;
    id: number | null;    
}
const initialState: InitialState = {
    dailyTable: [
        {
            rowId: 123,
            autoNumber: 1234,
            name: 'Ivanov',
            cash: 65,
            bort: 10,
            washing: 3,
            gas: 17,
            fuel: 0,
            spendings: 0,
            avans: 0,
            total: 123,
            addedDate: '20/09/2022/10:59',
        }, {
            rowId: 123,
            autoNumber: 1234,
            name: 'Ivanov',
            cash: 65,
            bort: 10,
            washing: 3,
            gas: 17,
            fuel: 0,
            spendings: 0,
            avans: 0,
            total: 123,
            addedDate: '20/09/2022/10:59',
        }, {
            rowId: 123,
            autoNumber: 1234,
            name: 'Ivanov',
            cash: 65,
            bort: 0,
            washing: 0,
            gas: 17,
            fuel: 0,
            spendings: 0,
            avans: 0,
            total: 123,
            addedDate: '20/09/2022/10:59',
        },
    ],
    isLoading: false,
    id: null,
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
        updateRow(state, action: PayloadAction<{ data: Partial<DailyTableType>, rowId: number }>) {
            const index = state.dailyTable.findIndex(obj => obj.rowId === action.payload.rowId)
            state.dailyTable[index] = {...state.dailyTable[index], ...action.payload.data}
        }

    }
})
