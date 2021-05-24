import {AUTH} from "./actionTypes";

const initialState = {

};

export function authReducer(state=initialState,action){
        const {type} = action;
        switch (type){
            case AUTH.LOGIN:{
                return {...state, ...action.payload}
            }
            case AUTH.REFRESH:{
                return {...state, ...action.payload}
            }
            case AUTH.SET_LOGIN:{
                return {...state, ...action.payload.data}
            }
            default:{
                return state
            }
        }
}
