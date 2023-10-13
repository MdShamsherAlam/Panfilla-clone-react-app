import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './backbutton.css';

const EditNavbar = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    // const {id}=useParams();
      const [formData, setFormData] = useState({
        navlogo:'',
        navheadertext1:'',
        navheadertext2:'',
        navheadertext3:'',
        navheadertext4:'',
        nht2Dropdown1:'',
        nht2Dropdown2:'',
        nht3Dropdown1:'',
        nht3Dropdown2:'',
        nht3Dropdown3:'',
        nht3Dropdown4:'',
        nht4Dropdown1:'',
        nht4Dropdown2:'',
        nht4Dropdown3:'',
        nht4Dropdown4:'',
        navbutton:'',
        });
  
        useEffect(()=>{
          if(!localStorage.getItem('isLoggedIn')){
             navigate('/')
          }
         },[])
       
  
  
      useEffect(()=>{
        axios.get('http://localhost:5000/navbar')
        .then(res=> {
          setData(res.data)
        })
      
        .catch(err=> console.log(err))
  
      },[])
  
  
      useEffect(()=>{
            if(data.length>0){
              setFormData(data[0]);
            }
      },[data])
  
      const handleChange = (e)=>{
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
  
      };
  
      const handleUpdate=(event)=>{
          event.preventDefault()
          axios.put("http://localhost:5000/navbar/1", formData )
          .then((res) => {
            console.log(res);
            alert("updated successfully")
            // navigate("/");
          })
    
          .catch((err) => console.log(err));
  
      }
    return (
      <> <div className="back-button">

      <div className="back">

      <Link to="/admin"> <button >Back</button></Link> 
      </div>
    </div>
      <div className="alertEdit">
        <h2>EDIT NAVBAR</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="alert-text1">NAVBAR LOGO</label>
            <input type="text" id="navlogo" name="alert-text1"  value={formData. navlogo}
              onChange={handleChange} />
          </div>
          <div className="form-group">
          <label htmlFor="alert-text2">HOME</label>
          <input type="text" id="navheadertext1" name="alert-text2"  value={formData.navheadertext1}
           onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="alert-text2">DROPDOWN BUTTON</label>
          <input type="text" id="navheadertext2" name="alert-text2"  value={formData.navheadertext2}
           onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="alert-text2">DROPDOWN BUTTON2</label>
          <input type="text" id="navheadertext3" name="alert-text2"  value={formData.navheadertext3}
           onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="alert-text2">DROPDOWN BUTTON3</label>
          <input type="text" id="navheadertext4" name="alert-text2"  value={formData.navheadertext4}
           onChange={handleChange}/>
        </div>
          
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      </>
    );
  };
export default EditNavbar
