import { combineReducers } from 'redux';
import allReducer from "./allReducer";

const allReducers = combineReducers({
    all: allReducer
})

export default allReducers