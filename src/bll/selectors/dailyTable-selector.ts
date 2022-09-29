import { AppState } from "../store";
import {dailyTableSlice} from '../reducers/dailyTable-reducer';

export const getDailyTableState = (state: AppState) => state[dailyTableSlice.name]
export const getTableId = (state: AppState) => getDailyTableState(state).id
export const getDailyTableData = (state: AppState) => getDailyTableState(state).dailyTable
export const getRow = (state: AppState, rowId: number) => state.dailyTable.dailyTable.find(obj => obj.rowId === rowId)
