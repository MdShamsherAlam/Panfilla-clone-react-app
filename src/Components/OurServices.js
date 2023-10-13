
import React, { useEffect, useState } from 'react';
import './OurServices.css';
import axios from 'axios'


const OurServices = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/ourservices')
      .then((res) => {
        // Assuming the JSON server response is an array of objects with 'alert-text1' property
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);




  return (
    <>
             {data.map((item, i) => (

    <section   className="ourservices" key={i}>
      
      <div className="heading">
        <h2>{item['osheading']}</h2>
      </div>
      <div className="row">
        <div className="row1">
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fab fa-wordpress"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading']}</span>
                <p>{item['oswordpresspara']}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fab fa-digital-ocean"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading1']}</span>
                <p>{item['oswordpresspara1']}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fas fa-feather-alt"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading2']}</span>
                <p>{item['oswordpresspara2']}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fas fa-laptop-code icon"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading3']}</span>
                <p>{item['oswordpresspara3']}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row1">
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fab fa-ioxhost"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading4']}</span>
                <p>{item['oswordpresspara4']}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fab fa-centercode"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading5']}</span>
                <p>{item['oswordpresspara5']}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fas fa-draw-polygon"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading6']}</span>
                <p>{item['oswordpresspara6']}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contentdiv">
              <div className="icon-circle">
                <i aria-hidden="true" class="fas fa-shopping-cart icons"></i>
              </div>
              <div className="ct1">
                <span>{item['oswordpressheading7']}</span>
                <p>{item['oswordpresspara7']}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ) )}
    </>
  );
}

export default OurServices;

