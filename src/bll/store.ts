import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {dailyTableReducer} from './dailyTable-reducer';

const rootReducer = combineReducers({
    table: dailyTableReducer
})

export const store = configureStore({
    reducer: rootReducer,
})