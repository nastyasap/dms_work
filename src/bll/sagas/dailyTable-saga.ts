import {all, call, put, takeEvery, takeLatest, select} from '@redux-saga/core/effects'
import {dailyTableApi} from '../../api/api'
import {dailyTableSlice} from '../reducers/dailyTable-reducer'
import { getTableId } from '../selectors/dailyTable';

function* fetchDailyTable({payload}: ReturnType<typeof dailyTableSlice.actions.loadTableRequest>) {
    const {data} = yield call(dailyTableApi.getDataTable, payload);
    yield put(dailyTableSlice.actions.loadTableSucess(data))
}

function* addRowToDailyTable({payload}: ReturnType<typeof dailyTableSlice.actions.addRow>) {
    const id: number = yield select(getTableId)
    yield call(dailyTableApi.createDataTable, id, payload )
}

export function* dailyTableSaga() {
    yield all([takeLatest(dailyTableSlice.actions.loadTableRequest.type, fetchDailyTable),
        takeLatest(dailyTableSlice.actions.addRow.type, addRowToDailyTable)
    ])
}
