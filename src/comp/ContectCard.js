import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const ContectCard = (props) => {

  const [data, setData] = useState(true);
  const token = localStorage.getItem('token');
  const history = useHistory();


  const Delid = props.id

  const Close =()=>{
    setData(true)

  }

  const Edit =()=>{
    setData(false)
  }
  let DELID
  const Delete =(el)=>{
    DELID = el.target.value;
    const DelUrl = ('https://weary-slug-jumpsuit.cyclic.app/phonebook/delete?id='+DELID);
    console.log(DelUrl);
    axios.delete(DelUrl,{ headers: {'usertoken':token }})
    .then((res)=>{
      console.log(res);
      history.push('/session');
    })
    .catch((error)=>{
      console.log("error");
    })
  }

	return (
		<>
		<div className="model-edit">

		<Formik
                initialValues={{
                    fname: '',
                    lname: '',
                    contect: '',
                    contect: '',
                    city: '',
                    country: '',
                }}
                onSubmit={async (values) => {
                    // window.location = "/session"
                    // history.push('/signup')
                    
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
    <Form style={data?{display:'none'}:{display:'block'}}>
    <div class="box-model">
    <div class="form-model">
      <div class="inputBox-model">
        <Field type="text" id="fname" value={props.fname} name="fname" required="required"  />
        <span>Fname</span>
        <i></i>
      </div>
      <div class="inputBox-model">
        <Field type="text" id="lname" name="lname"value={props.lname} required="required"  />
        <span>Lname</span>
        <i></i>
      </div>
      

      <div class="inputBox-model">
        <Field id="contect" type="contect" name="contect" value={props.contact} required="required"/>
        <span>Contect</span>
        <i></i>
      </div>
      <div class="inputBox-model">
        <Field id="city" type="city" name="city" value={props.city} required="required"/>
        <span>City</span>
        <i></i>
      </div>
      <div class="inputBox-model">
        <Field id="country" type="country" name="country" value={props.country} required="required"/>
        <span>Country</span>
        <i></i>
      </div>
      <div className="flex space-beet">
        <input type='button' value="close" onClick={Close}/>
      <input type="submit" value="save" /></div>
    </div>
  </div>
    </Form>
  </Formik>

		</div>
			<div class="card">
				<div class="poster"><h1>{props.fname + " " + props.lname}</h1></div>
				<div class="details">
					<h1>{props.fname + " " + props.lname}</h1>
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
