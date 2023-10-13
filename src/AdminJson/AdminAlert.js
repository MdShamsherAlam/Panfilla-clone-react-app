import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './backbutton.css';

const AdminAlert = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const {id}=useParams();
  const [formData, setFormData] = useState({
    alertText1: '',
    alertText2: '',
    alertText3: '',
    alertText4: ''
  });

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/')
    }
  }, [])



  useEffect(() => {
    axios.get('http://localhost:5000/alert')
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
    axios.put("http://localhost:5000/alert/1", formData)
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
        <h2>TopAlert</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="alert-text1">CONTACT US:</label>
            <input type="text" id="alertText1" name="alert-text1" value={formData.alertText1}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text2">QUOTE:</label>
            <input type="text" id="alertText2" name="alert-text2" value={formData.alertText2}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text3">MOBILE_NO:</label>
            <input type="text" id="alertText3" name="alert-text3" value={formData.alertText3}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">TIMING :</label>
            <input type="text" id="alertText4" name="alert-text4" value={formData.alertText4}
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

export default AdminAlert;
