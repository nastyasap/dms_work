import { AppState } from '../store';
import { dailyTableSlice } from '../reducers/dailyTable-reducer';

export const getDailyTableState = (state: AppState) => state[dailyTableSlice.name];
export const getTableId = (state: AppState) => getDailyTableState(state).id;
export const getDailyTableData = (state: AppState) => getDailyTableState(state).dailyTable;
export const getIsLoading = (state: AppState) => getDailyTableState(state).isLoading;
export const getComment = (state: AppState) => getDailyTableState(state).comment;
export const getRow = (rowId: string) => (state: AppState) =>
  state.dailyTable.dailyTable.find((obj) => obj._id === rowId);
