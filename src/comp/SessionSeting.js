import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Animationtext from './Animationtext';
import axios from 'axios';
import * as Yup from "yup";
import { Url } from '../Url';
const SessionSeting = () => {
const token = localStorage.getItem('token');
const history = useHistory();
const [User, setUser] = useState('');
const [Error , setError] = useState('')

const updateUrl = Url()+'/user/update'
console.log(updateUrl);
const Logout = () => {
  let comform = window.confirm("do logout this page ?");
  if (comform) {
       history.push('/');
      localStorage.removeItem('token')
  }
  else {
      console.log("fail");
  }
}
useEffect(()=>{

  axios.get(Url() + '/user/findbyid',{headers : { token : token}})
  .then((res)=>{
      // console.log(res.data.data);
      setUser(res.data.data);
  })
},[])
if(!User){
  return (<>loading</>)
}else{
  return (
    <div>
      <Formik
        initialValues={{
          fullname: User.fullname || '',
          username:  User.uname|| '',
          contact:  User.contact|| '',
          email:  User.email|| '',
        }}
        onSubmit={async (values, action) => {

          axios.patch(updateUrl,{
            "fullname" : values.fullname,
            "uname" : values.username,
            "contact" : values.contact,
            "email" : values.email
          }, { headers: { 'token': token } } )
            .then((res) => {
              console.log(res);
              console.log('yes');
              setError('')

              history.push('/session/setting');
            })
            .catch((error) => {
              console.log(error.response.data.message);
              setError(error.response.data.message)
            })
        }}
      >
        <Form>
          <div class="box-setting">
            <div class="form">
              <h2>User Settings</h2>
              <div class="inputBox">
                <Field type="text" classname="textwhite" id="name" name="fullname" required="required" />
                <span>fullname</span>
                <i></i>
              </div>
              <div class="inputBox">
                <Field type="text" id="username" name="username" required="required" />
                <span>Username</span>
                <i>{Error}</i>
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
  
}

export default SessionSeting
