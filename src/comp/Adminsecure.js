// import React, { useEffect, useState } from 'react'
// import {useHistory} from 'react-router-dom'
// import Loader from './Loader'

// const Adminsecure = (props) => {
//     const history = useHistory()
//     const [token, setToken] = useState("")

//     useEffect(() => {
//         let getToken = localStorage.getItem("admintoken")
//         if(!getToken){
//             return history.push('/')
//         }
//         setToken(getToken)
//     }, [])


//     if(!token){
//         return <Loader />
//     }

//   return props.children
// }

// export default Adminsecure


import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';

const Adminsecure = (props) => {
  const history = useHistory();
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    let getToken = localStorage.getItem('admintoken');
    if (!getToken) {
      return history.push('/');
    }
    setToken(getToken);

    // Simulate a loading delay (e.g., 2000 milliseconds)
    const delay = 1000;
    setTimeout(() => {
      setIsLoading(false); // After the delay, set isLoading to false
    }, delay);
  }, [history]);

  if (isLoading) {
    return <Loader />;
  }

  return props.children;
};

export default Adminsecure;