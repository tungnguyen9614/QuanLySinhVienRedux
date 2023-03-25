import {combineReducers} from 'redux';
import { quanLySinhVienReducer } from '../QuanLySinhVien/duck/reducer';

const rootReducer = combineReducers({
    quanLySinhVienReducer
});

export {rootReducer};