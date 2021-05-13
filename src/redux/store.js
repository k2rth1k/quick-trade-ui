import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import {authReducer} from "./auth/authReducers";
import {watchLogin} from "./auth/authSagas"
import rootSaga from "./module";


    const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
        auth:authReducer
        }
        )
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)


export default store;

