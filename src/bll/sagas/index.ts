import { all } from "redux-saga/effects";
import { dailyTableSaga } from "./dailyTable-saga";

export default function* rootSaga() {
    yield all([
        dailyTableSaga(),
    ])
}