import { ActionType, User } from "../action-types";

interface SetUserAction {
    type: typeof ActionType.SET_USER;
    payload: User;
}

interface SetLoadingAction {
    type: typeof ActionType.SET_LOADING;
    payload: boolean;
}

interface SignOutAction {
    type: typeof ActionType.SIGN_OUT;
}

interface SetErrorAction{
    type: typeof ActionType.SET_ERROR;
    payload: string
}

interface NeedVerification {
    type: typeof ActionType.NEED_VERIFICATION;
}

interface SetSuccessAction {
    type: typeof ActionType.SET_SUCCESS;
    payload: string;
}

export type AuthAction = SetUserAction
    | SetLoadingAction
    | SignOutAction
    | SetErrorAction
    | NeedVerification
    | SetSuccessAction;
