import { combineReducers } from "redux"; 
import authReducer from './authReducer';
import customerReducer from "./customerReducer";


const rootReducers = combineReducers({
    auth: authReducer,
    customers: customerReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
