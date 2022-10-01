import { all } from '@redux-saga/core/effects';
import { dailyTableSaga } from "./dailyTable-saga";

export default function* rootSaga() {
    yield all([
        dailyTableSaga(),
    ])
}