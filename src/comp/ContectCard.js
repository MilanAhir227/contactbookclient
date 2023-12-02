import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { Url } from '../Url';


const ContectCard = (props) => {

  const [data, setData] = useState(true);
  const token = localStorage.getItem('token');
  const history = useHistory();


  const Delid = props.id

  const Close = () => {
    setData(true)

  }

  const Edit = () => {
    setData(false)
  }
  let DELID
  const Delete = (el) => {
    DELID = el.target.value;
    const DelUrl = (Url()+'/contact/delete?id=' + DELID);
    console.log(DelUrl);
    axios.delete(DelUrl, { headers: { 'usertoken': token } })
      .then((res) => {
        console.log(res);
        history.push('/session');
        props.reload()
      })
      .catch((error) => {
        console.log("error");
      })
  }

  const Upadteurl = Url() + '/contact/update?id=' + props.id;

  return (
    <>
      <div className="model-edit">

        <Formik
          initialValues={{
            fullname: props.fullname || '',
            contact: props.contact || '',
            city: props.city || '',
            country: props.country || '',
          }}
          onSubmit={async (values) => {

            axios.patch(Upadteurl,values, { headers: { 'token': token } } )
              .then((res) => {
                console.log(res);
                
                setData(true);
                props.reload()
              })
              .catch((error) => {
                console.log("error");
              })

            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
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
                  <Field id="contact" type="contact" name="contact" required="required" />
                  <span>Contact</span>
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
      <div class="card">
        <div class="poster"><h1>{props.fullname}</h1></div>
        <div class="details">
          <h1>{props.fullname}</h1>
          <h1>{props.contact}</h1>
          <div class="rating">
            location :- {props.city},{props.country}
          </div>
          <div class="tags">
            <button onClick={Edit}>Edit</button>
            <button onClick={Delete} value={Delid}>Delete</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContectCard
