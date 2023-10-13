
// import React, { useEffect, useState } from 'react'
// import './Alert.css';
// import {Link, useNavigate} from 'react-router-dom'

// import axios from 'axios'


 
// const Alert = () => {

//   const [data,setData]=useState([])
//   // const navigate=useNavigate();
  

//    useEffect(()=>{
//      axios.get('http://localhost:3000/alert')
//      .then(res=> setData(res.data))
   
//      .catch(err=> console.log(err))

//    },[])



//   return (
//     <>
//     <div className="alert">
//     {
//                     data.map((alert-text1,i)=>(
//     <ul className='alert-left'key={i} >
//       <li> <Link to="/">CONTACT US</Link></li>
//       <li> <Link to="/">REQUEST QUOTE</Link></li>
//       <li> <Link to="/">+01-9709835014</Link></li>
      
     
//       <li> <Link to="/">MON-SUN:10:00-20:00</Link></li>


//     </ul>
//            <ul className='alert-right'>
//             <li>
//                 <Link to="/"><i class="fab fa-twitter"></i></Link>
//             </li>
//             <li>
//                 <Link to="/"><i class="fab fa-facebook"></i></Link>
//             </li>
//             <li>
//                 <Link to="/"><i class="fab fa-instagram"></i></Link>
//             </li>
//             <li>
//                 <Link to="/"><i class="fab fa-linkedin"></i></Link>
//             </li>
//            </ul>
//            ))
//           }
          
//     </div>
//     </>
//   )
// }

// export default Alert

import React, { useEffect, useState } from 'react';
import './Alert.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Alert = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/alert')
      .then((res) => {
        // Assuming the JSON server response is an array of objects with 'alert-text1' property
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
   <>
      {data.map((item, i) => (
        <div className="alert" key={i}>
          <ul className='alert-left'>
            <li> <Link to='/'>{item['alertText1']}</Link></li>
            <li> <Link to='/'>{item['alertText2']}</Link></li>
            <li> {item['alertText3']}</li>
            <li> {item['alertText4']}</li>
          </ul>
          <ul className='alert-right'>
            <li>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Alert;

