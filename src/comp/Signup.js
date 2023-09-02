import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import * as Yup from "yup";
import YupPassword from 'yup-password'
YupPassword(Yup);
const Signup = () => {

    let signupSchema = Yup.object().shape({
        fname: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required fname'),
        lname: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required lname'),
        username: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required username'),
        password: Yup.string()
          .min(8, 'Min 8 characters')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must 1-lower,1-upper,1-spcial,1-digits be use'
          )
          .required('*required password'),
        email: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required email'),
        contect: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required contect'),
      });

    return (
        <Formik
            initialValues={{
                fname: '',
                lname: '',
                username: '',
                password: '',
                email: '',
                contect: '',
            }}
            validationSchema={signupSchema}
            onSubmit={async (values, action) => {
                axios.post('https://lazy-blue-puffer-veil.cyclic.app/user/signup', {
                    "fname": values.fname,
                    "lname": values.lname,
                    "uname": values.username,
                    "password": values.password,
                    "contact": values.contect,
                    "email": values.email
                })
                    .then(function (response) {
                        console.log(response);
                        action.resetForm();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }}
        >
            <Form>
                <div class="box-1">
                    <div class="form">
                        <h2>Sign up</h2>
                        <div class="inputBox">
                            <Field id="fname" name="fname" required="required" />
                            <span>First name</span>
                            <i><ErrorMessage name='fname'/></i>
                        </div>
                        <div class="inputBox">
                            <Field id="lname" name="lname"
                                required="required" />
                            <span>Last name</span>
                            <i><ErrorMessage name='lname'/></i>
                        </div>
                        <div class="inputBox">
                            <Field id="username" name="username" required="required" />
                            <span>username</span>
                            <i><ErrorMessage name='username'/></i>
                        </div>
                        <div class="inputBox">
                            <Field id="password" type="password" name="password" required="required" />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="errorpass"><ErrorMessage name='password'/></div>
                        <div class="inputBox">
                            <Field type="text" id="contect" name="contect" required="required" />
                            <span>Contect</span>
                            <i><ErrorMessage name='contect'/></i>
                        </div>

                        <div class="inputBox">
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                required="required"
                            />
                            <span>email</span>
                            <i><ErrorMessage name='email'/></i>
                        </div>
                        <div class="links-1">
                            <input type="submit" value="Sign up" />
                            <Link to='/'>Log in</Link>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default Signup