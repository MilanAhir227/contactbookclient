import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Animationtext from './Animationtext';
import axios from 'axios';
const Login = () => {
  const history = useHistory()
  useEffect(() => {
    // axios.post('https://weary-slug-jumpsuit.cyclic.app/user/login')
    // .then((res) => {
    //     console.log(res);
    //     // setContect(res.data.data)
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //   })
  }, [])



  return (


    <div>
      <Animationtext />
      <Formik
        initialValues={{
          uname: '',
          password: '',
        }}
        onSubmit={async (values,action) => {
          axios.post('https://weary-slug-jumpsuit.cyclic.app/user/login', {
            "uname": values.uname,
            "password": values.password
          })
            .then(function (response) {
              console.log(response.data.token);
              localStorage.setItem('token', response.data.token)
              action.resetForm();
              history.push('/session')
            })
            .catch(function (error) {
                console.log("user error");
            });
            axios.post('https://weary-slug-jumpsuit.cyclic.app/admin/login',{
                "uname": values.uname,
               "password": values.password
              })
              .then((res)=>{
                console.log(res.data.token);
                localStorage.setItem('admintoken', res.data.token)
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
              <h2>Log in</h2>
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
                <Link to='/signup'>Signup</Link>
              </div>



              <input type="submit" value="Login" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Login