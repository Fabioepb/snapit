import { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAILURE } from '../constants/user';
import fetchLogin from '../api/login';

export function login(form) {
    return dispatch => {
        dispatch(request());
        fetchLogin(form).then(() => {
            dispatch(success(true));
        }).catch(() => {
            dispatch(failure(false));
        });
    }

    const request = () => ({ type: LOGIN_REQUEST });
    const success = (user) => ({ type: LOGIN_SUCESS, user });
    const failure = (error) => ({ type: LOGIN_FAILURE, error });
}

export function signUp() {
    return dispatch => {

    }
}

export function logout(auth) {
    return dispatch => {

    }
}

export function auth(auth) {
    return dispatch => {

    }
}