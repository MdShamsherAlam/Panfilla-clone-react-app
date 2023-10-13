import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './backbutton.css';

const EditBanner = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bannerHeaderText: '',
    bannerHeaderText2: '',
    bannerHeaderText3: '',
    bannerHeaderText4: '',
    bannerHeaderText5: ''
  });

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/banner')
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
      .put('http://localhost:5000/banner/1', formData)
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
        <h2>EDIT BANNER</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="bannerHeaderText">Banner Header Text 1:</label>
            <input
              type="text"
              id="bannerHeaderText"
              name="bannerHeaderText"
              value={formData.bannerHeaderText}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText2">Banner Header Text 2:</label>
            <input
              type="text"
              id="bannerHeaderText2"
              name="bannerHeaderText2"
              value={formData.bannerHeaderText2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText3">Banner Header Text 3:</label>
            <input
              type="text"
              id="bannerHeaderText3"
              name="bannerHeaderText3"
              value={formData.bannerHeaderText3}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText4">Banner Header Text 4:</label>
            <input
              type="text"
              id="bannerHeaderText4"
              name="bannerHeaderText4"
              value={formData.bannerHeaderText4}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText5">Banner Header Text 5:</label>
            <input
              type="text"
              id="bannerHeaderText5"
              name="bannerHeaderText5"
              value={formData.bannerHeaderText5}
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

export default EditBanner;
