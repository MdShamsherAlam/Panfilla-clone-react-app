import React, { useEffect, useState } from 'react'
import './Content2.css';
import axios from 'axios'

const Content2 = () => {
 const[data,setData]=useState([])
 useEffect(()=>{
  axios .get('http://localhost:5000/whychooseus')
   .then((res) => {
     // Assuming the JSON server response is an array of objects with 'alert-text1' property
     setData(res.data);
   })
   .catch((err) => console.log(err));


},[])



  return (
    <>
   {data.map((item,i)=>(




    <section key={i} className="con2-section">
      <div className="con2-section-heading"><h2>{item['heading']}</h2></div>
  <div className="con2-row">
    <div className="con-col ">
      <div className="con-card-red">
        <div className="con-icon-circle ">
          <i aria-hidden="true" class="fab fa-wordpress"></i>
        </div>
        <div className="con-content">
          <h2>{item['cardHeading']}</h2>
          <p>{item['cardpara']}</p>
        </div>
      </div>
    </div>
    <div className="con-col ">
      <div className="con-card-green">
        <div className="con-icon-circle">
        <i aria-hidden="true" class="fab fa-digital-ocean"></i>
        </div>
        <div className="con-content">
          <h2>{item['cardHeading2']}</h2>
          <p>{item['cardpara2']}</p>
        </div>
      </div>
    </div>
    <div className="con-col ">
      <div className="con-card-yellow">
        <div className="con-icon-circle ">
        <i aria-hidden="true" class="fab fa-superpowers"></i>
        </div>
        <div className="con-content">
          <h2>{item['cardHeading3']}</h2>
          <p>{item['cardpara3']}</p>
        </div>
      </div>
    </div>
    
  </div>
</section>
  ))}
  </>

  )
}

export default Content2
