import {USERS} from "./actionTypes";
const initialState={}
export  function usersReducers(state=initialState,action){
    const {type} = action
    console.log(action)
    switch(type){
        case USERS.CREATE_USER:{
            return {...state, ...action.payload.data}
        }
        default:
            return state
    }
}
