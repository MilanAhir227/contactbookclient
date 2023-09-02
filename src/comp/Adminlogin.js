import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Animationtext from './Animationtext';
import axios from 'axios';
const Adminlogin = () => {
  const history = useHistory()




  return (


    <div>
      <Animationtext />
      <Formik
        initialValues={{
          uname: '',
          password: '',
        }}
        onSubmit={async (values,action) => {
            axios.post('https://lazy-blue-puffer-veil.cyclic.app/admin/login',{
                "uname": values.uname,
               "password": values.password
              })
              .then((res)=>{
                console.log(res.data.token);
                localStorage.setItem('admintoken', res.data.token)
                localStorage.setItem('adminname', res.data.data.fname+" "+res.data.data.lname)
                localStorage.setItem('adminusername', res.data.data.uname)
                localStorage.setItem('admincontact', res.data.data.contact)
                localStorage.setItem('adminemail', res.data.data.email)
                action.resetForm();
                history.push('/admin/dashbord')
              })
              .catch((error)=>{
                console.log("admin error");

              })
        }}
      >
        <Form>
          <div class="box">
            <div class="form">
              <h2>Admin Log in</h2>
              <div class="inputBox">
                <Field type="text" id="uname" name="uname" required="required" />
                <span>Username</span>
                <i></i>
              </div>

              <div class="inputBox">
                <Field id="password" type="password" name="password" required="required" />
                <span>Password</span>
                <i></i>
              </div>
              <div class="links">
                <Link to='/forgetpass'>Forgot Password</Link>
              </div>



              <input type="submit" value="Login" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Adminlogin
