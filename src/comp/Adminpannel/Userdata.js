import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableData from './TableData';

const Userdata = () => {

    const [data , setData] = useState([]);
  
    const Admintoken = localStorage.getItem('admintoken')
    useEffect(()=>{
      axios.get('http://13.51.56.32:3001/user/find',{ headers: {'admintoken': Admintoken}})
    .then((res)=>{
      setData(res.data.data)
    })
    .catch((error)=>{
      console.log('error');
    })
    },[])
  
    console.log(data);
    return (
      <>
        <div className="heder">
          <h1>userdata</h1>
        </div>
      
        <table className='table'>
          <tr>
            <td>no</td>
            <td>fname</td>
            <td>lname</td>
            <td>user name</td>
            <td>contect</td>
            <td>email</td>
          </tr>
  
  
          {
            data.map((el,index)=>{
              return <TableData index={index+1} fname={el.fname} lname={el.lname} username={el.uname} contect={el.contact} email={el.email}/>
            })
          }
        </table>
      
      
      </>
  
      
    )
  }

export default Userdata
