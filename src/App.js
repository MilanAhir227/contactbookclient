import logo from './logo.svg';
import Login from './comp/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Signup from './comp/Signup';
import Forgetpass from './comp/Forgetpass';
import Createpass from './comp/Createpass';
import Routerror from './comp/Routerror';
import Session from './comp/Session';
import Adminpannel from './comp/Adminpannel';
import Secure from './comp/Secure';
import Adminsecure from './comp/Adminsecure';
import Adminlogin from './comp/Adminlogin';
import MyAudioComponent from './comp/Loader';
import SessionSeting from './comp/SessionSeting';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/createpass'>
          <Createpass />
        </Route>
        <Route path='/forgetpass'>
          <Forgetpass />
        </Route>
        <Route path='/session/setting'>
          <Secure>
            <SessionSeting />
          </Secure>
        </Route>
        <Route path='/session'>
          <Secure>
            <Session />
          </Secure>
        </Route>
        
        <Route path='/admin'>
        <Adminsecure>
          <Adminpannel />
        </Adminsecure>
        </Route>
        <Route path='/load'>
          <MyAudioComponent />

        </Route>
        <Route path='/adminlog'>
          <Adminlogin />
        </Route>
        
        <Route exact path='/'>
          <Login />
        </Route>
        <Route>
          <Routerror />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
