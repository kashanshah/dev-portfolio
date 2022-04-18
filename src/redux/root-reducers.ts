import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import commonSlice from '@redux/common-slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['dummy'],
};

export const rootReducers = persistReducer(
  persistConfig,
  combineReducers({
    common: commonSlice,
  })
);
