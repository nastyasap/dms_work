import { AppState } from "../store";

export const getTableId = (state: AppState) => state.dailyTable.id
export const getRow = (state: AppState, rowId: number) => state.dailyTable.dailyTable.find(obj => obj.rowId === rowId)
