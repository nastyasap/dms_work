import { all, call, put, select, takeLatest } from '@redux-saga/core/effects';
import { dailyTableApi } from '../../api/api';
import { dailyTableSlice } from '../reducers/dailyTable-reducer';
import { getTableId } from '../selectors/dailyTable-selector';

function* fetchDailyTable({ payload }: ReturnType<typeof dailyTableSlice.actions.loadTableRequest>) {
  const { data } = yield call(dailyTableApi.getDataTable, payload.date, payload.isMorning);
  yield put(dailyTableSlice.actions.loadTableSuccess(data));
}

function* addRowToDailyTable({ payload }: ReturnType<typeof dailyTableSlice.actions.addRow>) {
  const id: string = yield select(getTableId);
  const { data } = yield call(dailyTableApi.createDataTable, id, payload);
  yield put(dailyTableSlice.actions.addRowSuccess(data));
}

function* updateRowInDailyTable({ payload }: ReturnType<typeof dailyTableSlice.actions.updateRow>) {
  yield call(dailyTableApi.updateDataTable, payload.rowId, payload.data);
}

function* deleteRowInDailyTable({ payload }: ReturnType<typeof dailyTableSlice.actions.deleteRow>) {
  yield call(dailyTableApi.removeRow, payload);
}

export function* dailyTableSaga() {
  yield all([
    takeLatest(dailyTableSlice.actions.loadTableRequest.type, fetchDailyTable),
    takeLatest(dailyTableSlice.actions.addRow.type, addRowToDailyTable),
    takeLatest(dailyTableSlice.actions.updateRow.type, updateRowInDailyTable),
    takeLatest(dailyTableSlice.actions.deleteRow.type, deleteRowInDailyTable),
  ]);
}
