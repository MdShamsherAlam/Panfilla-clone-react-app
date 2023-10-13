import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const EditForm = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const {id}=useParams();
  const [formData, setFormData] = useState({
    formheading:'',
    formname: '',
    formemail: '',
    formphone: '',
    selectaservicedropdown:'',
    selectaservicedropdown1:'',
    selectaservicedropdown2:'',
    selectaservicedropdown3:'',
    selectaservicedropdown4:'',
    selectaservicedropdown5:'',
    selectaservicedropdown6:'',
    selectaservicedropdown7:'',
    selectaservicedropdown8:'',
     
    formmessage:'',
    formbutton:'',
    formtopheading:'',
    formtoppara:'',
    formbackgroundimage:'',
     

  });

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/')
    }
  }, [])



  useEffect(() => {
    axios.get('http://localhost:5000/userform')
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
    axios.put("http://localhost:5000/userform/1", formData)
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
        <h2>EDIT USERFORM</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="alert-text1">USERFORM-HEADING:</label>
            <input type="text" id="formheading" name="alert-text1" value={formData.formheading}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text2">FORM-NAME</label>
            <input type="text" id="formname" name="alert-text2" value={formData.formname}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text3">FORM-EMAIL</label>
            <input type="text" id="formemail" name="alert-text3" value={formData.formemail}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-PHONE_NO</label>
            <input type="text" id="formphone" name="alert-text4" value={formData.formphone}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-DROPDOWN</label>
            <input type="text" id="selectaservicedropdown" name="alert-text4" value={formData.selectaservicedropdown}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown1" name="alert-text4" value={formData.selectaservicedropdown1}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown2" name="alert-text4" value={formData.selectaservicedropdown2}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown3" name="alert-text4" value={formData.selectaservicedropdown3}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown4" name="alert-text4" value={formData.selectaservicedropdown4}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown5" name="alert-text4" value={formData.selectaservicedropdown5}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown6" name="alert-text4" value={formData.selectaservicedropdown6}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown7" name="alert-text4" value={formData.selectaservicedropdown7}
              onChange={handleChange} />
               <input type="text" id="selectaservicedropdown8" name="alert-text4" value={formData.selectaservicedropdown8}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-MESSAGE</label>
            <input type="text" id="formmessage" name="alert-text4" value={formData.formmessage}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-BUTTON</label>
            <input type="text" id="formbutton" name="alert-text4" value={formData.formbutton}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-TOP-HEADING</label>
            <input type="text" id="formtopheading" name="alert-text4" value={formData.formtopheading}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-TOP-PARAGRAPH</label>
            <input type="text" id="formtoppara" name="alert-text4" value={formData.formtoppara}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alert-text4">FORM-BACKGROUND-IMG</label>
            <input type="text" id="formbackgroundimage" name="alert-text4" value={formData.formbackgroundimage}
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

export default EditForm
