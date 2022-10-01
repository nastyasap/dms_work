import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { dailyTableSlice } from './reducers/dailyTable-reducer';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  [dailyTableSlice.name]: dailyTableSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

export type AppState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);