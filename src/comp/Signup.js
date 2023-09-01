import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
const Signup = () => {
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
            onSubmit={async (values,action) => {
                axios.post('https://weary-slug-jumpsuit.cyclic.app/user/signup', {
                    "fname" : values.fname,
                    "lname" : values.lname,
                    "uname" : values.username,
                    "password" : values.password,
                    "contact" : values.contect,
                    "email" : values.email
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
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <Field id="lname" name="lname"
                                required="required" />
                            <span>Last name</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <Field id="username" name="username" required="required" />
                            <span>username</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <Field id="password" type="password" name="password" required="required" />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <Field type="text" id="contect" name="contect" required="required" />
                            <span>Contect</span>
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
                            <i></i>
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