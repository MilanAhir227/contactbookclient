import React, { useEffect, useState } from 'react'
import ContectCard from './ContectCard'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SessionSeting from './SessionSeting';
import Secure from './Secure';


const Session = () => {
    const history = useHistory();
    // const [Contect, setContect] = useState([]);
    const [User, setUser] = useState([]);

    const [search, setsearch] = useState("");
    const [searchdata, setsearchdata] = useState([]);

    // const searchurl = 'https://graceful-tuna-undershirt.cyclic.appphonebook/findbyfeild?search=' + search;
     const searchurl = 'https://graceful-tuna-undershirt.cyclic.app/phonebook/find';


    const [data, setData] = useState(true);

    const AddContect = () => {
        setData(false)

    }

    const Close = () => {
        setData(true)

    }
    const Logout = () => {
        let comform = window.confirm("do logout this page ?");
        if (comform) {
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
            history.push('/');
        }
        else {
            console.log("fail");
        }
    }
    const token = localStorage.getItem('token');



    // console.log(Contect);
    // useEffect(() => {
    //     axios.get('https://graceful-tuna-undershirt.cyclic.app/phonebook/findbyuser', { headers: { 'usertoken': token } })
    //         .then((res) => {
    //             setContect(res.data.data)
    //             // console.log(res.data);
    //         })
    //         .catch((error) => {
    //             console.log("error");
    //         })

    // }, [Contect])
    useEffect(() => {
        axios.get(searchurl, { headers: { 'usertoken': token } })
            .then((res) => {
                setsearchdata(res.data.data)
                // console.log(res.data);
            })
            .catch((error) => {
                console.log("error");
            })
    }, [searchdata])

    const Serch = (text) => {
        setsearch(text)
    }
    const Setting =()=>{
        history.push('/session/setting')
    }

   

    return (
        <Router>
        <div className="w-100">
                <div className="w-1140">
                    <div className="top-nav">
                    <div className='logout-btn'><button onClick={Setting}>setting</button></div>
                    </div>
                    <div className="profile">
                        <div className='w-20'>
                            <img src="https://illustoon.com/photo/7817.png" width={'100%'} alt="" />
                        </div>
                        <div className='w-80'>
                            <div className="w-50"><h1>Username :- {localStorage.getItem('fname')+" "+localStorage.getItem('lname')}</h1></div>
                            <div className="w-50">
                                <h2>name :- {localStorage.getItem('userusername')}</h2></div>
                        </div>
                    </div>
                    <div className="search"><input type="search" placeholder='search' onChange={(el) => Serch(el.target.value)} /></div>
                    <div className='card-area'>


                        {
                            // console.log(el.city);    
                            searchdata.map((el, index) => {
                                return <ContectCard fname={el.fname} lname={el.lname} contact={el.contact} city={el.city} country={el.country} id={el._id} />
                            })
                        }
                        <div class="card-add">
                            <h1><button onClick={AddContect}>add contect</button></h1>
                        </div>
                        <div className="model-del">

                            <Formik
                                initialValues={{
                                    fname: '',
                                    lname: '',
                                    contect: '',
                                    city: '',
                                    country: '',
                                }}
                                onSubmit={async (values, action) => {
                                    console.log(values);
                                    axios.post('https://graceful-tuna-undershirt.cyclic.app/phonebook/create', {
                                        "fname": values.fname,
                                        "lname": values.lname,
                                        "contact": values.contect,
                                        "city": values.city,
                                        "country": values.country,
                                    }, { headers: { 'usertoken': token } })
                                        .then(function (response) {
                                            action.resetForm();
                                            setData(true)
                                            history.push('/session')

                                        })
                                        .catch(function (error) {
                                            console.log("error");
                                        });
                                }}
                            >

                                <Form style={data ? { display: 'none' } : { display: 'block' }}>
                                    <div class="box-model">
                                        <div class="form-model">
                                            <div class="inputBox-model">
                                                <Field type="text" id="fname" name="fname" required="required" />
                                                <span>Fname</span>
                                                <i></i>
                                            </div>
                                            <div class="inputBox-model">
                                                <Field type="text" id="lname" name="lname" required="required" />
                                                <span>Lname</span>
                                                <i></i>
                                            </div>


                                            <div class="inputBox-model">
                                                <Field id="contect" type="contect" name="contect" required="required" />
                                                <span>Contect</span>
                                                <i></i>
                                            </div>
                                            <div class="inputBox-model">
                                                <Field id="city" type="city" name="city" required="required" />
                                                <span>City</span>
                                                <i></i>
                                            </div>
                                            <div class="inputBox-model">
                                                <Field id="country" type="country" name="country" required="required" />
                                                <span>Country</span>
                                                <i></i>
                                            </div>
                                            <div className="flex space-beet">
                                                <input type='button' value="close" onClick={Close} />
                                                <input type="submit" value="save" /></div>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
            </Router>

       
    )
}

export default Session
