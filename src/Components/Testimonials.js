import React, { useEffect, useState } from 'react'
import './Testimonials.css';
import axios from 'axios'
const Testimonials = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
     axios.get('http://localhost:5000/Testimonials')
     .then((res)=>{
      setData(res.data)

     })
     .catch((err)=>console.log(err))


    },[])

    return (
        <>
        {data.map((item,i)=>(

       
        
        
        
        
        
        <section key={i} className="testi-section">
            <div className="testi-main">
                <div className="test-h1">
                <div className="testi-heading"><h2>{item['heading']}</h2></div>
                <div className="testi-p"><p>{item['testipara']}</p></div>
                </div>
                <div className="testi-card">

                    <div className="testi-card-left">
                        <div className="testi-card-img">
                            <img src={item['leftimage']} alt="" />

                        </div>
                        <div className="testi-card-content">
                            <div className="tcc-heading"><h2>{item['leftheading']}</h2></div>
                            <div className="tcc-heading2">{item['leftheading2']}</div>
                            <div className="testi-card-icons"><i class="fas fa-star" aria-hidden="true"></i></div>
                            <div className="tcc-p"><p><i>{item['leftpara']}</i></p></div>
                        </div>

                    </div>
                    <div className="testi-card-right">
                        <div className="testi-card-img">
                            <img src={item['rightimage']} alt="" />

                        </div>
                        <div className="testi-card-content">
                            <div className="tcc-heading"><h2>{item['rightheading']}</h2></div>
                            <div className="tcc-heading2">{item['rightheading2']}</div>
                            <div className="testi-card-icons"><i class="fas fa-star" aria-hidden="true"></i></div>
                            <div className="tcc-p"><p><i>{item['rightpara']}</i> </p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


        </section>
        ))}
        </>
    )
}

export default Testimonials
