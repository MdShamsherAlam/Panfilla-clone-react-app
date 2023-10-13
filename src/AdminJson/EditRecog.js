import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditRecog = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    // const {id}=useParams();
    const [formData, setFormData] = useState({
        recheading:'',
        image1: '',
        image2: '',
        image3: '',
        image4: ''
    });
  
    useEffect(() => {
      if (!localStorage.getItem('isLoggedIn')) {
        navigate('/')
      }
    }, [])
  
  
  
    useEffect(() => {
      axios.get('http://localhost:5000/recognization')
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
      axios.put("http://localhost:5000/recognization/1", formData)
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
          <h2>EDIT RECOGNIZATION</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="alert-text1">Heading:</label>
              <input type="text" id="recheading" name="alert-text1" value={formData.recheading}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text2">Rec-Image1</label>
              <input type="text" id="image1" name="alert-text2" value={formData.image1}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text3">Rec-Image2</label>
              <input type="text" id="image2" name="alert-text3" value={formData.image2}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text4">Rec-Image3</label>
              <input type="text" id="image3" name="alert-text4" value={formData.image3}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text4">Rec-Image4</label>
              <input type="text" id="image4" name="alert-text4" value={formData.image4}
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

export default EditRecog
