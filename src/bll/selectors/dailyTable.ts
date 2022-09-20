import { AppState } from "../store";

export const getTableId = (state: AppState) => state.dailyTable.id
export const getTable = (state: AppState) => state.dailyTable.dailyTable
export const getRow = (state: AppState, rowId: number) => state.dailyTable.dailyTable.find(obj => obj.rowId === rowId)
