import React, { useEffect, useState } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/banner')
      .then((res) => {
        // Assuming the JSON server response is an array of objects with 'alert-text1' property
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
   
   {data.map((item, i) => (
    <div className="section-1" key={i}>
  <div className='overlay'></div>
  <div className="content">
    <h4>{item['bannerHeaderText']}</h4>
    <h1>{item['bannerHeaderText2']}</h1>
    <h2>{item['bannerHeaderText3']}</h2>
    <h3>{item['bannerHeaderText4']}</h3>
    <button className="btn">{item['bannerHeaderText5']}</button>
  </div>
  </div>
   ))}
  



    </>
  )
}

export default Banner
