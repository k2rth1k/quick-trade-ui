import {USERS} from "./actionTypes";

export function createUser(payload){
    return {
        type: USERS.CREATE_USER,
        payload
    }
}
