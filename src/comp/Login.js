import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Animationtext from './Animationtext';
import axios from 'axios';
import * as Yup from "yup";

const Login = () => {
  const history = useHistory()
  let Logerror
  useEffect(() => {
    // axios.post('https://graceful-tuna-undershirt.cyclic.app/user/login')
    // .then((res) => {
    //     console.log(res);
    //     // setContect(res.data.data)
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //   })
  }, [])

  let LoginSchema =Yup.object().shape({
    uname: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*please enter username'),
    password:Yup.string().min(8, 'Too Short!').max(70, 'Too Long!').required('*please enter password'),
  });

  return (


    <div>
      <Animationtext />
      <Formik
        initialValues={{
          uname: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values,action) => {
          axios.post('https://graceful-tuna-undershirt.cyclic.app/user/login', {
            "uname": values.uname,
            "password": values.password
          })
            .then(function (res) {
              console.log(res.data.token);
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('userid', res.data.data._id)
              localStorage.setItem('fname', res.data.data.fname)
              localStorage.setItem('lname', res.data.data.lname)
                localStorage.setItem('userusername', res.data.data.uname)
                localStorage.setItem('usercontact', res.data.data.contact)
                localStorage.setItem('useremail', res.data.data.email)

                console.log(res.data);
              action.resetForm();
              history.push('/session')
            })
            .catch(function (error) {
                console.log("user error");
                   Logerror = "incorrect username or password"
            });
        }}
      >
        <Form>
          <div class="box">
            <div class="form">
              <h2>Log in</h2>
              <div class="inputBox">
                <Field type="text" id="uname" name="uname" required="required" />
                <span>Username</span>
                <i>
                  <ErrorMessage name='uname'/>
                
                </i>
              </div>

              <div class="inputBox">
                <Field id="password" type="password" name="password" required="required" />
                <span>Password</span>
                <i><ErrorMessage name='password'/></i>
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