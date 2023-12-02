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
import { Url } from '../Url';


const Session = () => {
    const history = useHistory();
    const [User, setUser] = useState({});

    const [search, setsearch] = useState("");
    const [searchdata, setsearchdata] = useState([]);

     let searchurl = Url() + '/contact/find?search=' + search;


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
            history.push('/');
        }
        else {
            console.log("fail");
        }
    }
    const token = localStorage.getItem('token');

    const Datafetch = () =>{return axios.get(searchurl, { headers: { 'token': token } }) .then((res) => {
        setsearchdata(res.data.data)
        // console.log(res.data);
    })
    .catch((error) => {
        console.log("error");
    })}
           

    useEffect(() => {
        Datafetch()
    }, [search])

    const Serch = (text) => {
        setsearch(text)
    }
    const Setting =()=>{
        history.push('/session/setting')
    }

    useEffect(()=>{

        axios.get(Url() + '/user/findbyid',{headers : { token : token}})
        .then((res)=>{
            console.log(res.data.data);
            setUser(res.data.data);
        })
    },[token])
   

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
                            <div className="w-50"><h1>Username :- {User.fullname}</h1></div>
                            <div className="w-50">
                                <h2>name :- {User.uname}</h2></div>
                        </div>
                    </div>
                    <div className="search"><input type="search" placeholder='search' onChange={(el) => Serch(el.target.value)} /></div>
                    <div className='card-area'>


                        {
                            // console.log(el.city);    
                            searchdata.map((el, index) => {
                                console.log(el);
                                return <ContectCard fullname={el.fullname} contact={el.contact} city={el.city} country={el.country} id={el._id} reload={Datafetch}/>
                            })
                        }
                        <div class="card-add">
                            <h1><button onClick={AddContect}>add contect</button></h1>
                        </div>
                        <div className="model-del">

                            <Formik
                                initialValues={{
                                    fullname: '',
                                    contect: '',
                                    city: '',
                                    country: '',
                                }}
                                onSubmit={async (values, action) => {
                                    console.log(values);
                                    axios.post(Url() + '/contact/create', {
                                        "fullname": values.fullname,
                                        "contact": values.contect,
                                        "city": values.city,
                                        "country": values.country,
                                    }, { headers: { 'token': token } })
                                        .then(function (response) {
                                            action.resetForm();
                                            setData(true)
                                            Datafetch()
                                            console.log(response);
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
                                                <Field type="text" id="fullname" name="fullname" required="required" />
                                                <span>fullname</span>
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
