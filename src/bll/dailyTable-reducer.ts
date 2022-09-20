import {createSlice} from '@reduxjs/toolkit';

type DailyTableType = {
    autoNumber?: number
    name: string
    cash: number
    bort?: number
    washing?: number
    gas: number
    fuel?: number
    spendings?: number
    avans?: number
    total: number
    addedDate: string
}

const slice = createSlice({
    name: 'dailyTable',
    initialState: [] as Array<DailyTableType>,
    reducers: {

    }
})

export const dailyTableReducer = slice.reducer