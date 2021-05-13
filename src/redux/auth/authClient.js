import axios from 'axios';

export function login(email,password){

    console.log(email,password)
    return axios.post("http://localhost:50443/v1/login", {
        email:email,
        password:password
    })
}
