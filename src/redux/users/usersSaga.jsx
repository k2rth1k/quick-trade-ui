import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {USERS} from "./actionTypes";
import {createUserRequest} from "./usersClient";
import {handleCreateUserResponse} from "./usersActions";
import {setLogin} from "../auth/authActions";

export function* createUserSaga({payload:{email,password,lastName,firstName,phone}}){
    try {
        const response = yield call(createUserRequest,email,password,lastName,firstName,phone)
        if (response.status === 200){
            yield put(handleCreateUserResponse(response.data))
            yield put(setLogin(response))
        }
    }catch (e) {
        console.log(e)
    }
}


export function* watchCreateUser(){
    yield takeEvery(USERS.CREATE_USER,createUserSaga)
}

export function* watchUsers(){
    yield all(
        [
            fork(watchCreateUser)
        ]
    )
}
