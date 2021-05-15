import {useState} from "react";
import {useDispatch} from "react-redux";
import {createUser} from "../../redux/users/usersActions";
import {  Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import  styles from './CreateUserForm.scss';



export default function CreateUserForm(){
    console.log('createUser')
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

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
    const submit = ()=>{
        dispatch(createUser({email,password,lastName,firstName,phone}))
    }
    return(
            <Form>
                <Form.Input  className={styles.labelTest} required label={'Email'} placeholder={'Email'} onChange={changeEmail}/>
                <Form.Input required  label={'First Name'} placeholder={'First Name'} onChange={changeFirstName}/>
                <Form.Input required label={'Last Name'} placeholder={'Last Name'} onChange={changeLastName} />
                <Form.Input required label={'Phone'} placeholder={'Phone'} onChange={changePhone} />
                <Form.Input required label={'Password'} placeholder={'Password'} onChange={changePassword}/>
                <Form.Input required error={retypePassword!==password &&
                    "passwords must be same"
                } label={'Retype Password'} placeholder={'Retype Password'} onChange={changeRetypePassword}/>
                <Form.Button onClick={submit} color="green">
                    Submit
                </Form.Button>
            </Form>
    )
}
