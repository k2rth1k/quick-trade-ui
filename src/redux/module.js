import {watchAuth} from "./auth/authSagas";
import { fork, all } from 'redux-saga/effects';

export default function* rootSaga(){
    yield all(
        [
            fork(watchAuth)
        ]
    )
}
