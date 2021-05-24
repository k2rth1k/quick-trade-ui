import {USERS} from "./actionTypes";

export function createUser(payload){
    return {
        type: USERS.CREATE_USER,
        payload
    }
}

export function getUser(){
    return{
        type: USERS.GET_STATE
    }
}

export function handleCreateUserResponse(payload){
    return {
        type: USERS.HANDLE_CREATE_USER_RESPONSE,
        payload
    }
}
