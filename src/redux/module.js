import {watchAuth} from "./auth/authSagas";
import { fork, all } from 'redux-saga/effects';
import {watchUsers} from "./users/authSagas";

export default function* rootSaga(){
    yield all(
        [
            fork(watchAuth),
            fork(watchUsers)
        ]
    )
}
