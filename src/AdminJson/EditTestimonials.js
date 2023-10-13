import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const EditTestimonials = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    // const {id}=useParams();
    const [formData, setFormData] = useState({
        heading:'',
        testipara: '',
        leftimage: '',
        leftheading: '',
        leftheading2:'',
        leftpara:'',
        rightimage:'',
        rightheading:'',
        rightheading2:'',
        rightpara:'',
       

    });
  
    useEffect(() => {
      if (!localStorage.getItem('isLoggedIn')) {
        navigate('/')
      }
    }, [])
  
  
  
    useEffect(() => {
      axios.get('http://localhost:5000/Testimonials')
        .then(res => {
          setData(res.data)
        })
  
        .catch(err => console.log(err))
  
    }, [])
  
  
    useEffect(() => {
      if (data.length > 0) {
        setFormData(data[0]);
      }
    }, [data])
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  
    };
  
    const handleUpdate = (event) => {
      event.preventDefault()
      axios.put("http://localhost:5000/Testimonials/1", formData)
        .then((res) => {
          console.log(res);
          alert("updated successfully")
          // navigate("/");
        })
  
        .catch((err) => console.log(err));
  
    }
    return (
      <>
        <div className="back-button">
  
          <div className="back">
  
          <Link to="/admin"> <button >Back</button></Link> 
          </div>
        </div>
        <div className="alertEdit">
          <h2>EDIT TESTIMONIALS</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="alert-text1">Heading:</label>
              <input type="text" id="heading" name="alert-text1" value={formData.heading}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text2">Child-Heading</label>
              <input type="text" id="testipara" name="alert-text2" value={formData.testipara}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text3">Left Image</label>
              <input type="text" id="leftimage" name="alert-text3" value={formData.leftimage}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text4">Right Image</label>
              <input type="text" id="rightimage" name="alert-text4" value={formData.rightimage}
                onChange={handleChange} />
               </div>
              
            
            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  };

export default EditTestimonials
