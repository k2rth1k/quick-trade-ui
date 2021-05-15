import axios from "axios";

export function createUserRequest(email,password,lastName,firstName,phone){
    return axios.post("http://localhost:50443/v1/users/create",{
        email:email,
        password:password,
        last_name:lastName,
        first_name:firstName,
        phone:phone
    })
}
