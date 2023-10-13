import React, { useEffect, useState } from 'react'
import './Latestwork.css';
import axios from 'axios';

const Latestwork = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/latestwork")
    .then((res)=>{
    setData(res.data)



    })
    .catch((err)=>console.log(err))







  },[])


  return (
    <>
    {data.map((item,i)=>(




   
    <section key={i} className="lw-section">
     <div className="lw-heading"><h2>{item['heading']}</h2></div>
     <div className="lw-row">
        <div className="lw-col">
          <div className="lw-img">  <img src={item['image1']} alt="Loading" /></div>
            <div className="lw-content"><a href="/">{item['image1text']}</a></div>
            <div className="lw-p"><p>{item['image1text2']}</p></div>
        </div>
        <div className="lw-col">
        <div className="lw-img">  <img src={item['image2']}/></div>
            <div className="lw-content"><a href="/"></a>{item['image2text']}</div>
            <div className="lw-p"><p>{item['image2text2']}</p></div>
            
            </div>
            <div className="lw-col">
            <div className="lw-img">  <img src={item['image3']}  alt="Loading" /></div>
            <div className="lw-content"><a href="/"></a>{item['image3text']}</div>
            <div className="lw-p"><p>{item['image3text2']}</p></div>
            
            </div>
     </div>
     <div className=" lw-btn"><button>{item['button']}</button></div>

    </section>
     ))}
    </>
  )
}

export default Latestwork
