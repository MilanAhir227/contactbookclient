import { useHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Routerror from './Routerror';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import AdminManage from './AdminManage';
import Userdata from './Adminpannel/Userdata';
import { Table } from 'react-bootstrap';
import Dashboard from './Adminpannel/Dashboard';


const Adminpannel = () => {
    
    const history = useHistory();
  const Logout =()=>{
    let comform = window.confirm("do logout this page ?");
    if(comform)
    {
      localStorage.removeItem('token')
            localStorage.removeItem('admintoken')
            localStorage.removeItem('username')
            localStorage.removeItem('userid')
            localStorage.removeItem('userusername')
            localStorage.removeItem('usercontact')
            localStorage.removeItem('useremail')
            localStorage.removeItem('adminname')
            localStorage.removeItem('adminusername')
            localStorage.removeItem('admincontact')
            localStorage.removeItem('adminemail')
        history.push('/');
    }
    else
    {
        console.log("fail");
    }
  }
  return (

    <Router>
      <div className="w-100">
        <div className="w-1200">
          <div className="admin">
            <div className="w-30" id='slider'>
              <div className="view">
                <div className="admin-profile admin-manu">
                </div>
                <div className="admin-manu">
                  <button ><Link to='/admin/dashbord'>Dashboard</Link></button>
                  <button ><Link to='/admin/table'>Table</Link></button>
                  <button ><Link to='/admin/users'>User Data</Link></button>
                  <button ><Link to='/admin/manage'>manage</Link></button>
                  <button onClick={Logout}>Log out</button>

                </div>
              </div>
            </div>
            <div className="w-70" id='admin-view'>

              <div className="view-2">
                <Switch >
                  <Route path='/admin/users'>
                    <Userdata />
                  </Route>
                  <Route path='/admin/table'>
                    <Table />
                  </Route>
                  <Route path='/admin/manage'>
                    <AdminManage />
                  </Route>
                  <Route exact path='/admin/dashbord'>
                    <Dashboard />
                  </Route>
                  <Route>
                    <Routerror />
                  </Route>

                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Adminpannel
