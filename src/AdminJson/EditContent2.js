import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditContent2 = () => {
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
      axios.get('http://localhost:5000/whychooseus')
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
      axios.put("http://localhost:5000/whychooseus/1", formData)
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
          <h2>Why Choose Us?</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="alert-text1">Heading</label>
              <input type="text" id="heading" name="alert-text1" value={formData.heading}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text2">First-Card:</label>
              <input type="text" id="cardHeading" name="alert-text2" value={formData.cardHeading}
                onChange={handleChange} />
                 <input type="text" id="cardpara" name="alert-text2" value={formData.cardpara}
                onChange={handleChange} />
            </div>








            <div className="form-group">
              <label htmlFor="alert-text3">Second-Card:</label>
              <input type="text" id="cardHeading2" name="alert-text3" value={formData.cardHeading2}
                onChange={handleChange} />
                <input type="text" id="cardpara2" name="alert-text3" value={formData.cardpara2}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alert-text4">Third-Card:</label>
              <input type="text" id="cardHeading3" name="alert-text4" value={formData.cardHeading3}
                onChange={handleChange} />
                  <input type="text" id="cardpara3" name="alert-text4" value={formData.cardpara3}
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

export default EditContent2
