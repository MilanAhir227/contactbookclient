import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
const Forgetpass = () => {
  const history = useHistory()
  const Email=(email)=>{
    console.log(email.target.value);
  }
  const OTP =(otp)=>{
    console.log(otp.target.value);

  }
  return (
        <div class="box-2">
          <div class="form">
            <h2>Forget Password</h2>
            <div class="inputBox">
              <input id="email" type="text" name="email" onChange={Email} required="required"  />
              <span>email</span>
              <i></i>
            </div>
            <input type="submit" value="SendOTP" />

            <div class="inputBox">
              <input id="OTP" type="text" name="OTP" onChange={OTP} required="required" minLength={1} maxLength={6}/>
              <span>OTP</span>
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

export default Forgetpass