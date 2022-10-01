import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DailyTableRow } from '../../api/api';

interface InitialState {
  dailyTable: DailyTableRow[];
  isLoading: boolean;
  id: string | null;
}

const initialState: InitialState = {
  dailyTable: [],
  isLoading: false,
  id: null,
};

export const NEW_ROW_ID = 'empty';

export const EMPTY_DATA: DailyTableRow = {
  _id: NEW_ROW_ID,
  autoNumber: null,
  name: null,
  cash: null,
  bort: null,
  washing: null,
  gas: null,
  fuel: null,
  spendings: null,
  avans: null,
  addedDate: new Date().getTime(),
};

export const dailyTableSlice = createSlice({
  name: 'dailyTable',
  initialState: initialState,
  reducers: {
    loadTableRequest(state, action: PayloadAction<{ date: string; isMorning: number }>) {
      state.isLoading = true;
    },
    loadTableSuccess(
      state,
      action: PayloadAction<{
        rows: DailyTableRow[];
        table: { _id: string };
      }>,
    ) {
      state.isLoading = false;
      state.dailyTable = [...action.payload.rows, EMPTY_DATA];
      state.id = action.payload.table._id;
    },
    addRow(state, action: PayloadAction<Partial<DailyTableRow>>) {
      // const data = {...EMPTY_DATA, ...action.payload}
      // state.dailyTable.push(data)
    },
    addRowSuccess(state, action: PayloadAction<DailyTableRow>) {
      state.dailyTable = [
        ...state.dailyTable.filter((item) => item._id !== NEW_ROW_ID),
        {
          ...action.payload,
          _id: action.payload._id,
        },
        EMPTY_DATA,
      ];
    },
    updateRow(state, action: PayloadAction<{ data: Partial<DailyTableRow>; rowId: string }>) {
      const index = state.dailyTable.findIndex((obj) => obj._id === action.payload.rowId);
      state.dailyTable[index] = {
        ...state.dailyTable[index],
        ...action.payload.data,
      };
    },
  },
});
