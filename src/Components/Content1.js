import React, { useEffect, useState } from 'react'
import './Content.css'
import axios from 'axios';
const Content1 = () => {
      

   const [data,setData]=useState([])

   useEffect(()=>{
     axios .get('http://localhost:5000/content1')
      .then((res) => {
        // Assuming the JSON server response is an array of objects with 'alert-text1' property
        setData(res.data);
      })
      .catch((err) => console.log(err));


   },[])




  return (
  <>
   { data.map((item,i)=>(
    <section className="cnt-section" key={i}>


    
   <div className="cnt-element1">
    
      <img src={item['contentpng']} alt="come back" />
   </div>
   <div className="cnt-element2">
     <div className="cnt-h1">
      <h1>{item['contentHeading']}</h1>
     </div>
     <div className="cnt-p1">
     <p>{item['contentpara']}</p>
     </div>
     <div className="cnt-p2">
        <p>
             {item['contentpara2']} </p>
     </div>
     <div className="cnt-btn">
        <button>{item['contentbutton']}</button>
       
     </div>
   </div>
</section>
   ))}
   </>


  )
}

export default Content1
