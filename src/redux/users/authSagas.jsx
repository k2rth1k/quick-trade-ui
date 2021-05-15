import {all, call, fork, takeEvery} from "redux-saga/effects";
import {USERS} from "./actionTypes";
import {createUserRequest} from "./usersClient";

export function* createUserSaga({payload:{email,password,lastName,firstName,phone}}){
    try {
        const response = yield call(createUserRequest,email,password,lastName,firstName,phone)
    }catch (e) {

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
