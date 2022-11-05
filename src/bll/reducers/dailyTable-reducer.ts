import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DailyTableRow } from '../../api/api';

interface InitialState {
  dailyTable: DailyTableRow[];
  comment: string;
  isLoading: boolean;
  id: string | null;
}

const initialState: InitialState = {
  dailyTable: [],
  isLoading: false,
  id: null,
  comment: '',
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
    resetTable(state, action: PayloadAction) {
      state.dailyTable = [];
      state.comment = '';
    },
    loadTableSuccess(
      state,
      action: PayloadAction<{
        rows: DailyTableRow[];
        table: { _id: string; comment: string };
      }>,
    ) {
      state.isLoading = false;
      state.dailyTable = [...action.payload.rows, EMPTY_DATA];
      state.id = action.payload.table._id;
      state.comment = action.payload.table.comment;
    },
    addRow(state, action: PayloadAction<Partial<DailyTableRow>>) {},
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
    deleteRow(state, action: PayloadAction<string>) {
      const index = state.dailyTable.findIndex((obj) => obj._id === action.payload);
      state.dailyTable.splice(index, 1);
    },
    addComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
  },
});
