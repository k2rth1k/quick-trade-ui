import {AUTH} from "./actionTypes";

export function loginAction(payload){
    return{
      type:AUTH.LOGIN,
      payload
    };
}

export function  setLogin(payload){
    return{
        type:AUTH.SET_LOGIN,
        payload
    }
}
