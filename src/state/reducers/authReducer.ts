import { ActionType, AuthState } from "../action-types";
import { AuthAction } from '../actions'

const initialState: AuthState = {
    loading: false,
    error: '',
    needVerification: false,
    success: '',
    user: null,
    authenticated: false,
}

export default (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case ActionType.SET_USER :
            return {
                ...state,
                user: action.payload,
                authenticated:true,
            }
        case ActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload, // their is error change this to fasle
            }
        case ActionType.SIGN_OUT:
            return {
                ...state,
                user: null,
                authenticated: false,
                loading: false,
            }
        
        case ActionType.SET_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        
        case ActionType.NEED_VERIFICATION:
            return {
                ...state,
                needVerification:true,
            }
        case ActionType.SET_SUCCESS:
            return {
                ...state,
                success: action.payload,
            }
        default:
            return state;
    }
}
