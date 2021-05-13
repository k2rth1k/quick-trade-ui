import {AUTH} from "./actionTypes";

export function loginAction(payload){
    console.log("askkaskm")
    return{
      type:AUTH.LOGIN,
      payload
    };
}

export function  setLogin(payload){
    console.log("called")
    return{
        type:AUTH.SET_LOGIN,
        payload
    }
}
