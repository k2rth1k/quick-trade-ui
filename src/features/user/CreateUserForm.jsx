import { useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createUser} from "../../redux/users/usersActions";
import {  Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import   './CreateUserForm.scss';
import {Redirect} from "react-router";
import {Routes} from "../../routes";


export default function CreateUserForm(){
    const dispatch = useDispatch();
    const users = useSelector(state => state.users, shallowEqual)
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [focused, setFocus] = useState(false)
    const changePassword =(event)=>{
        setPassword(event.target.value)
    }

    const changeRetypePassword = (event)=>{
        setRetypePassword(event.target.value)
    }

    const changeLastName = (event) => {
        setLastName(event.target.value)
    }

    const changeFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const changeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const changePhone = (event) => {
        setPhone(event.target.value)
    }
    const submit = async () => {
        await dispatch(createUser({email, password, lastName, firstName, phone}))
        console.log(users)
    }
    const onFocus = () =>{
        setFocus(true)
    }
    const onFocusOut = () =>{
        setFocus(false)
    }
    return(
        <div className={'createUserPage'}>
            {console.log(users)}
            {users.createStatus ?  <Redirect to={Routes.login}/>:
            <div className={'createUserForm'}>
                <h2 className={'title'}> Create Account</h2>
                <Form  id={'form'}>
                    <Form.Input className={'email input'} required label={'Email'} placeholder={'Email'} onChange={changeEmail}/>
                    <Form.Input required  label={'First Name'} placeholder={'First Name'} onChange={changeFirstName}/>
                    <Form.Input required label={'Last Name'} placeholder={'Last Name'} onChange={changeLastName} />
                    <Form.Input required label={'Phone'} placeholder={'Phone'} onChange={changePhone} />
                    <Form.Input required label={'Password'} type={'password'} placeholder={'Password'} onChange={changePassword}/>
                    <Form.Input required type={'password'} onFocus={onFocus} onBlur={onFocusOut} error={focused && retypePassword!==password &&
                    "passwords must be same"
                    } label={'Retype Password'} placeholder={'Retype Password'} onChange={changeRetypePassword}/>
                    <Form.Button onClick={submit} color="green">
                        Submit
                    </Form.Button>
                </Form>

            </div>}
        </div>

    )
}
