import React, { useState,useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './backbutton.css';


const EditOurservices = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        osheading: '',
        oswordpressheading: '',
        oswordpresspara: '',
        oswordpressheading1: '',
        oswordpresspara1: '',
        oswordpressheading2: '',
        oswordpresspara2: '',
        oswordpressheading3: '',
        oswordpresspara3: '',
        oswordpressheading4: '',
        oswordpresspara4: '',
        oswordpressheading5: '',
        oswordpresspara5: '',
        oswordpressheading6: '',
        oswordpresspara6: '',
        oswordpressheading7: '',
        oswordpresspara7: '',

    });
  
    useEffect(() => {
      if (!localStorage.getItem('isLoggedIn')) {
        navigate('/');
      }
    }, []);
  
    useEffect(() => {
      axios
        .get('http://localhost:5000/ourservices')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
      if (data.length > 0) {
        setFormData(data[0]);
      }
    }, [data]);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleUpdate = (event) => {
      event.preventDefault();
      axios
        .put('http://localhost:5000/ourservices/1', formData)
        .then((res) => {
          console.log(res);
          alert('Updated successfully');
          // navigate("/");
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <>
      <div className="back-button">

<div className="back">

<Link to="/admin"> <button >Back</button></Link> 
</div>
</div>
        <div className="alertEdit">
          <h2>EDIT OURSERVICES</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="bannerHeaderText">OURSERVICES HEADING:</label>
              <input
                type="text"
                id="osheading"
                name="bannerHeaderText"
                value={formData.osheading}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText2">FIRST- ICON-TEXT1</label>
              <input
                type="text"
                id="oswordpressheading"
                name="bannerHeaderText2"
                value={formData.oswordpressheading}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText3">FIRST-ICON-TEXT2 </label>
              <input
                type="text"
                id="oswordpresspara"
                name="bannerHeaderText3"
                value={formData.oswordpresspara}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText4">CONTENT-PARAGRAPH</label>
              <input
                type="text"
                id="oswordpressheading1"
                name="bannerHeaderText4"
                value={formData.oswordpressheading1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara1"
                name="bannerHeaderText5"
                value={formData.oswordpresspara1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpressheading2"
                name="bannerHeaderText5"
                value={formData.oswordpressheading2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara2"
                name="bannerHeaderText5"
                value={formData.oswordpresspara2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpressheading3"
                name="bannerHeaderText5"
                value={formData.oswordpressheading3}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara3"
                name="bannerHeaderText5"
                value={formData.oswordpresspara3}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpressheading4"
                name="bannerHeaderText5"
                value={formData.oswordpressheading4}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara4"
                name="bannerHeaderText5"
                value={formData.oswordpresspara4}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpressheading5"
                name="bannerHeaderText5"
                value={formData.oswordpressheading5}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara5"
                name="bannerHeaderText5"
                value={formData.oswordpresspara5}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpressheading6"
                name="bannerHeaderText5"
                value={formData.oswordpressheading6}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara6"
                name="bannerHeaderText5"
                value={formData.oswordpresspara6}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpressheading7"
                name="bannerHeaderText5"
                value={formData.oswordpressheading7}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
              <input
                type="text"
                id="oswordpresspara7"
                name="bannerHeaderText5"
                value={formData.oswordpresspara7}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  };

export default EditOurservices
