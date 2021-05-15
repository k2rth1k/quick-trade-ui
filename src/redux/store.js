import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import {authReducer} from "./auth/authReducers";
import rootSaga from "./module";
import {usersReducers} from "./users/userReducers";


    const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
        auth:authReducer,
        users:usersReducers
        }
        )
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)


export default store;

