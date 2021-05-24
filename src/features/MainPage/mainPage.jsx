import './mainPage.scss';
import {Button} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import {useState} from "react";
import {Redirect} from "react-router";
import {Routes} from "../../routes";
export default function MainPage(){
    const [login, setLogin] = useState(false);
    const [singUp, setSignUp] = useState(false);
    const routeToLogin = function () {
            setLogin(true)
    }
    const routeToSignUP = function () {
        setSignUp(true)
    }
    return(
        <div className={'MainPage'}>
            {login && <Redirect to={Routes.login}/>}
            {singUp && <Redirect to={Routes.createUserForm}/>}
            <header>
                <div className={'signButtons'}>
                    <Button color={"green"} className={'signIn'} onClick={routeToLogin}>
                        Sign In
                    </Button>
                    <Button color={"green"} className={'signOut'} onClick={routeToSignUP}>
                        Sign Up
                    </Button>
                </div>
            </header>
            <div className={'UpperCard'}>
                <div className={'Welcome'}>
                    <h1>Welcome to Quick Trade</h1>
                </div>
                <div className={'Description'}>
                   <h3>
                       Great place to trade items
                   </h3>
                </div>
            </div>
            <div className={'Features'}>
                <div className={'Feature1'}>
                        <h2>
                            trade items with anyone within close proximity to you.
                        </h2>
                </div>
            </div>
        </div>
    )
}
