import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './backbutton.css';

const EditOverlay = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    overlayheading1: "",
    overlayheading2: "",
    overlayheading3: "",
    overlayheading4: "",
    overlayheading5: "",
    globe1: "",
    globe2: "",
    globe3: "",
    globe4: "",
    globe5: "",
    globe6: "",
    globe7: "",
    globe8: "",
    globe9: "",
    globe10: "",
    globe11: "",
    globe12: "",
    globe13: "",
    globe14: "",
    globe15: "",
    globe16: "",
    globe17: "",
    globe18: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/overlay")
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
      .put("http://localhost:5000/overlay/1", formData)
      .then((res) => {
        console.log(res);
        alert("Updated successfully");
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
        <h2>EDIT OVERLAY</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="bannerHeaderText">OVERLAY HEADING:</label>
            <input
              type="text"
              id="overlayheading1"
              name="bannerHeaderText"
              value={formData.overlayheading1}
              onChange={handleChange}
            />
            <input
              type="text"
              id="overlayheading2"
              name="bannerHeaderText"
              value={formData.overlayheading2}
              onChange={handleChange}
            />
            <input
              type="text"
              id="overlayheading3"
              name="bannerHeaderText"
              value={formData.overlayheading3}
              onChange={handleChange}
            />
            <input
              type="text"
              id="overlayheading4"
              name="bannerHeaderText"
              value={formData.overlayheading4}
              onChange={handleChange}
            />
            <input
              type="text"
              id="overlayheading5"
              name="bannerHeaderText"
              value={formData.overlayheading5}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText2">WORK AND ACHIEVEMENT</label>
            <input
              type="text"
              id="globe1"
              name="bannerHeaderText2"
              value={formData.globe1}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe2"
              name="bannerHeaderText2"
              value={formData.globe2}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe3"
              name="bannerHeaderText2"
              value={formData.globe3}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe4"
              name="bannerHeaderText2"
              value={formData.globe4}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe5"
              name="bannerHeaderText2"
              value={formData.globe5}
              onChange={handleChange}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText2">WORK AND ACHIEVEMENT</label>
            <input
              type="text"
              id="globe6"
              name="bannerHeaderText2"
              value={formData.globe6}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe7"
              name="bannerHeaderText2"
              value={formData.globe7}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe8"
              name="bannerHeaderText2"
              value={formData.globe8}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe9"
              name="bannerHeaderText2"
              value={formData.globe9}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe10"
              name="bannerHeaderText2"
              value={formData.globe10}
              onChange={handleChange}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText2">WORK AND ACHIEVEMENT</label>
            <input
              type="text"
              id="globe11"
              name="bannerHeaderText2"
              value={formData.globe11}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe12"
              name="bannerHeaderText2"
              value={formData.globe12}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe13"
              name="bannerHeaderText2"
              value={formData.globe13}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe14"
              name="bannerHeaderText2"
              value={formData.globe14}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe15"
              name="bannerHeaderText2"
              value={formData.globe15}
              onChange={handleChange}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="bannerHeaderText2">WORK AND ACHIEVEMENT</label>
            <input
              type="text"
              id="globe16"
              name="bannerHeaderText2"
              value={formData.globe16}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe17"
              name="bannerHeaderText2"
              value={formData.globe17}
              onChange={handleChange}
            />
             <input
              type="text"
              id="globe18"
              name="bannerHeaderText2"
              value={formData.globe18}
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

export default EditOverlay;
