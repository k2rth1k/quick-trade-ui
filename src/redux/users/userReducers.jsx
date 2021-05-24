import {USERS} from "./actionTypes";
export const initialState = {
    createStatus: false,
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
}
export  function usersReducers(state=initialState, action){
    const {type} = action
    switch(type){
        case USERS.CREATE_USER:{
            const st = {...state, ...action.payload.data}
            console.log(st)
            return st
        }
        case USERS.HANDLE_CREATE_USER_RESPONSE:{
            const data = action.payload
            state.createStatus = true
            state.email = data.email
            state.lastName = data.last_name
            state.firstName = data.first_name
            state.phone = data.phone
            console.log(state)
            return state
        }
        case USERS.GET_STATE:{
            console.log(action)
            return state
        }
        default:
            return state
    }
}
