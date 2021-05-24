import './features/Login/login-page'
import {Login} from "./features/Login/login-page";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import CreateUserForm from "./features/user/CreateUserForm";
import {Routes} from "./routes"
import MainPage from './features/MainPage/mainPage';
import './App.css'
function App() {
  return (
    <div id={'App'}>

      <Router>
          <Route exact path={'/'}>
              <MainPage/>
          </Route>
              <Route exact path={'/login'}>
                  <Login/>
              </Route>
              <Route exact path={Routes.createUserForm}>
                  <CreateUserForm/>
              </Route>
      </Router>
    </div>
  );
}

export default App;
