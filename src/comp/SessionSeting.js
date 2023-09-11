import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Animationtext from './Animationtext';
import axios from 'axios';
import * as Yup from "yup";
const SessionSeting = () => {
const token = localStorage.getItem('token');
const history = useHistory();
const updateUrl = 'https://graceful-tuna-undershirt.cyclic.app/user/update'
console.log(updateUrl);
const Logout = () => {
  let comform = window.confirm("do logout this page ?");
  if (comform) {
       history.push('/');

      localStorage.removeItem('token')
      localStorage.removeItem('admintoken')
      localStorage.removeItem('fname')
      localStorage.removeItem('lname')
      localStorage.removeItem('userid')
      localStorage.removeItem('userusername')
      localStorage.removeItem('usercontact')
      localStorage.removeItem('useremail')
      localStorage.removeItem('adminname')
      localStorage.removeItem('adminusername')
      localStorage.removeItem('admincontact')
      localStorage.removeItem('adminemail')
  }
  else {
      console.log("fail");
  }
}
  return (
    <div>
      <Formik
        initialValues={{
          fname: localStorage.getItem('fname') || '',
          lname: localStorage.getItem('lname') || '',
          username: localStorage.getItem('userusername') || '',
          contact: localStorage.getItem('usercontact') || '',
          email: localStorage.getItem('useremail') || '',
        }}
        onSubmit={async (values, action) => {
          await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          console.log(values);
          console.log(updateUrl);

          axios.patch(updateUrl,{
            "fname" : values.fname,
            "lname" : values.lname,
            "uname" : values.username,
            "contact" : values.contact,
            "email" : values.email
          }, { headers: { 'usertoken': token } } )
            .then((res) => {
              // console.log(res);
              // console.log('yes');
              // localStorage.setItem('fname', values.fname)
              // localStorage.setItem('lname', values.lname)
              // localStorage.setItem('userusername', values.uname)
              // localStorage.setItem('usercontact', values.contact)
              // localStorage.setItem('useremail', values.email)

              // history.push('/session/setting');
              

            })
            .catch((error) => {
              console.log("error");
            })
        }}
      >
        <Form>
          <div class="box-setting">
            <div class="form">
              <h2>User Settings</h2>
              <div class="inputBox">
                <Field type="text" classname="textwhite" id="name" name="fname" required="required" />
                <span>fname</span>
                <i></i>
              </div>
              <div class="inputBox">
                <Field type="text" classname="textwhite" id="name" name="lname" required="required" />
                <span>lname</span>
                <i></i>
              </div>
              <div class="inputBox">
                <Field type="text" id="username" name="username" required="required" />
                <span>Username</span>
                <i></i>
              </div>
              <div class="inputBox">
                <Field type="text" id="contact" name="contact" required="required" />
                <span>Mobile No</span>
                <i></i>
              </div>
              <div class="inputBox">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  required="required"
                />
                <span>email</span>
                <i>   </i>
              </div>

              

              <div class="links">
              <button className='savechange' type='submit'>save change</button>
              </div>
              <div class="links">
              <button className='logout' onClick={Logout}> Log Out</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default SessionSeting
