import React, { useEffect, useState } from 'react'
import './Recognization.css';
import axios from 'axios';


const Recognization = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/recognization')
      .then((res) => {
        // Assuming the JSON server response is an array of objects with 'alert-text1' property
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));


  }, [])


  return (
    <>
    {data.map((item,i)=>(
    
    <section key={i} className="rec-section">
      <div className="rec-heading">
        <h2>{item['recheading']}</h2>
      </div>
      <div className="rec-row">
        <div className="rec-col"><img src={item['image1']} alt="rec photo" /></div>
        <div className="rec-col"><img src={item['image2']} alt="rec-photo" /></div>
        <div className="rec-col"><img src={item['image3']} alt="rec-photo" /></div>
        <div className="rec-col"><img src={item['image4']} alt="rec-photo" /></div>
      </div>

    </section>
    ))}
    </>
  )
}

export default Recognization
