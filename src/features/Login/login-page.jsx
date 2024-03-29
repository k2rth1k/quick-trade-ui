import React, {useState} from 'react';
import './LoginPage.css';
import { useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../redux/auth/authActions";
import {Routes} from "../../routes";


export function Login(){
    const status = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const togglePassword=()=>{
        setShow(!show)
    }
    const [email, setEmail] = useState(status.email);
    const [password, setPassword] = useState('');
    const changePassword=(password)=>{
        setPassword(password.target.value)
    }
    const changeEmail = (email)=>{
        setEmail(email.target.value)
    }

    const submit=()=>{
        dispatch(loginAction({email,password}))
    }
    return(
        <div className={'LoginPage'}>
            <div className={'LoginContainer'}>
                <div className={'LoginTitle'}>
                    <label > LOGIN</label>
                </div>
                <div className={'UserName'}>
                    <input  placeholder={"Email"} onChange={changeEmail} value={email}/>
                </div>
                <div className={'Password'}>
                    <input  type={show ? 'text' : 'password'}  placeholder={"Password"} onChange={changePassword} value={password}/>
                    <button  className={'ToggleVisibility'} onClick={togglePassword}>{
                        show? 'Show' : 'Hide'
                    }</button>
                </div>

                <div className={'LoginButton'}>
                    <button onClick={submit}> Login</button>
                </div>
                <div className={'createUserFormLink'}>
                    <text className={'qstn'}>New to Quick-Trade?</text>
                    <a href={Routes.createUserForm}>Create an account</a>
                </div>
            </div>
        </div>
    )
}


export default Login;
