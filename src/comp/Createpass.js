import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
const Createpass = () => {
    const history = useHistory()

    const newPassword =(el)=> {
        console.log(el.target.value);
    }
  return (
      <div class="box-3">
        <div class="form">
          <h2>Create Password</h2>
          <div class="inputBox">
            <input id="password" type="password" name="password" onChange={newPassword} required="required" />
            <span>New Password</span>
            <i></i>
          </div>
          

          {/* <div class="links">
            <Link to='/forgetpass'>Forgot Password</Link>
            <Link to='/signup'>Signup</Link>
          </div> */}
          <input type="submit" value="Submit" />
        </div>
      </div>
  )
}

export default Createpass