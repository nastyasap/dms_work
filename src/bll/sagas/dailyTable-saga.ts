import {all, call, put, takeEvery, takeLatest, select} from '@redux-saga/core/effects'
import {dailyTableApi, DailyTableType} from '../../api/api'
import {dailyTableSlice} from '../reducers/dailyTable-reducer'
import {getRow, getTableId} from '../selectors/dailyTable';

function* fetchDailyTable({payload}: ReturnType<typeof dailyTableSlice.actions.loadTableRequest>) {
    const {data} = yield call(dailyTableApi.getDataTable, payload);
    yield put(dailyTableSlice.actions.loadTableSucess(data))
}

function* addRowToDailyTable({payload}: ReturnType<typeof dailyTableSlice.actions.addRow>) {
    const id: number = yield select(getTableId)
    yield call(dailyTableApi.createDataTable, id, payload)
}

function* updateRowInDailyTable({payload}: ReturnType<typeof dailyTableSlice.actions.updateRow>) {
    const id: number = yield select(getTableId)
    const data: DailyTableType = yield select((state) => getRow(state, payload.rowId))
    const updatedData = {...data, ...payload.data}
    yield call(dailyTableApi.updateDataTable, id, payload.rowId, updatedData)
}


export function* dailyTableSaga() {
    yield all([takeLatest(dailyTableSlice.actions.loadTableRequest.type, fetchDailyTable),
        takeLatest(dailyTableSlice.actions.addRow.type, addRowToDailyTable),
        takeLatest(dailyTableSlice.actions.updateRow.type, updateRowInDailyTable),
    ])
}
