import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './backbutton.css';

const EditContent1 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contentpng: '',
    contentHeading: '',
    contentpara: '',
    contentpara2: '',
    contentbutton: ''
  });

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/content1')
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
      .put('http://localhost:5000/content1/1', formData)
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
        <h2>EDIT CONTENT1</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="bannerHeaderText">CONTENT LOGO:</label>
            <input
              type="text"
              id="contentpng"
              name="bannerHeaderText"
              value={formData.contentpng}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText2">CONTENT HEADER-TEXT</label>
            <input
              type="text"
              id="contentHeading"
              name="bannerHeaderText2"
              value={formData.contentHeading}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText3">CONTENT-PARAGRAPH </label>
            <input
              type="text"
              id="contentpara"
              name="bannerHeaderText3"
              value={formData.contentpara}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText4">CONTENT-PARAGRAPH</label>
            <input
              type="text"
              id="contentpara2"
              name="bannerHeaderText4"
              value={formData.contentpara2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText5">CONTENT BUTTON:</label>
            <input
              type="text"
              id="contentbutton"
              name="bannerHeaderText5"
              value={formData.contentbutton}
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


export default EditContent1
