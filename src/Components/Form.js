import React, { useEffect, useState } from 'react'
// import { Form } from "react-router-dom";
import axios from 'axios'
import './Form.css';
const Form = () => {
const [data,setData]=useState([])
useEffect(()=>{
     axios.get('http://localhost:5000/userform')
     .then((res)=>{
     setData(res.data)


     })
     .catch((err)=>console.log(err))
   



},[])

    return (
        <>
        {data.map((item,i)=>(



  
        <section key={i} className="form-section">
            <div className="form-content">
                <div className="form-heading">
                    <h1>{item['formtopheading']}</h1>
                </div>
                <div className="form-p">
                    <p>{item['formtoppara']}</p>
                </div>
                <div className="form-image">
                    <img src={item['formbackgroundimage']} alt="form-image" />
                </div>
            </div>
            <div className="arrow-img">
                <img src="https://panfila.in/wp-content/uploads/2021/02/arrow-down-yellow.png" alt="arrow-png" />
            </div>


            <div className="form-container">
                <div className="f-container-heading"><h1>{item['formheading']}</h1></div>
                <form >
                    <div className="form-groupss">
                        <label htmlFor="name">{item['formname']}</label>
                        <div className="name-group">
                            <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
                            <input type="text" id="last-name" name="last-name" class="last-name" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="form-groupss">
                        <label htmlFor="email">{item['formemail']}</label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-groupss">
                        <label htmlFor="phone">{item['formphone']}</label>
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="form-groupss">
                        <label htmlFor="service">{item['selectaservicedropdown']}</label>
                        <select id="service" name="service" required>
                            <option value="service1">{item['selectaservicedropdown1']}</option>
                            <option value="service2">{item['selectaservicedropdown2']}</option>
                            <option value="service3">{item['selectaservicedropdown3']}</option>
                            <option value="service3">{item['selectaservicedropdown4']}</option>
                            <option value="service3">{item['selectaservicedropdown5']}</option>
                            <option value="service3">{item['selectaservicedropdown6']}</option>
                            <option value="service3">{item['selectaservicedropdown7']}</option>
                            <option value="service3">{item['selectaservicedropdown8']}</option>
                        </select>
                    </div>
                    <div className="form-groupss">
                        <label htmlFor="message">{item['formmessage']}</label>
                        <textarea id="message" name="message" required placeholder="Message"></textarea>
                    </div>
                    <div className="form-groupss">
                       <div className="form-btn"><button type="submit">{item['formbutton']}</button></div> 
                    </div>
                </form>
            </div>

        </section>
        ))}
        </>
    )
}

export default Form
