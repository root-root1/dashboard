import {ThunkAction} from 'redux-thunk';
import { ActionType, SignUpData, User, SignInData} from '../action-types';
import { AuthAction } from '../actions';
import { RootState } from '../reducers';
import firebase from '../../firebase/config';


const signUp = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            if (res.user) {
                const userData: User = {
                    email: data.email,
                    firstName: data.firstName,
                    id: res.user.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                }
                await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
                await res.user.sendEmailVerification();
                dispatch({
                    type: ActionType.NEED_VERIFICATION
                });
                dispatch({
                    type: ActionType.SET_USER,
                    payload: userData,
                });
            }
        } catch (err: any) {
            console.log(err);
            onError();
            dispatch({
                type: ActionType.SET_ERROR,
                payload: err.message,
            });
        }
    }
}

// Get user by id
export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        try {
            const user = await firebase.firestore().collection('users').doc(id).get();
            if (user.exists) {
                const userData = user.data() as User;
                dispatch({
                    type: ActionType.SET_USER,
                    payload: userData
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

// setting the loading
export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.SET_LOADING,
            payload: value,
        });
    }
}

// log In dispatch
export const signIn = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        } catch (err:any) {
            console.log(err);
            onError();
            dispatch(setError(err.message));
        }
    }
}

// log out
export const logOut = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await firebase.auth().signOut();
            dispatch({
                type: ActionType.SIGN_OUT
            });
        } catch (err:any) {
            console.log(err.message);
            dispatch(setLoading(false));
        }
    }
}

// set error message function
export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.SET_ERROR,
            payload: msg,
        });
    }
}

// set need verification
export const setNeedVerification = (): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: ActionType.NEED_VERIFICATION
        });
    }
}

// set success
export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.SET_SUCCESS,
            payload: msg
        })
    }
}

// send password reset email
export const sendPasswordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async (dispatch) => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            dispatch(setSuccess(successMsg));
        } catch (err: any) {
            console.log(err.message);
            dispatch(setError(err.message));
        }
    }
}
