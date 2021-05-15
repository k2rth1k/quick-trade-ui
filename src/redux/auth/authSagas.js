import { fork, call, takeEvery, all, put } from 'redux-saga/effects';
import {AUTH} from './actionTypes'
import {login} from "./authClient";
import {setLogin} from "./authActions";

function* loginSaga({payload:{email,password}}){
    try{
        console.log("asjnasjna")
        const response = yield call(login,email,password)
        console.log( response)
        yield put(setLogin(response))
    }catch (e) {
        console.log(e)
    }
}

export function* watchLogin(){
    yield takeEvery(AUTH.LOGIN, loginSaga)
}

export function* watchAuth(){
    yield all(
        [
            fork(watchLogin)
        ]
    )
}
