import React, { useEffect, useState } from 'react'
import './Overlay.css';
import axios from 'axios'

const Overlay = () => {
    const [data, setData] = useState([])


    
        useEffect(() => {
            axios
              .get('http://localhost:5000/overlay')
              .then((res) => {
              
                setData(res.data);
                // console.log('Response data:', res.data);
              })
              .catch((err) => console.log(err));
          }, []);


    return (
        <>
        {data.map((item, i) => (

                <section   className="overlay-section">
                    <div className="overlay-main-section">
                        <div className="overlay-section-heading"><h2>{item['overlayheading1']} <b className="overlay-h2-green">{item['overlayheading2']}</b>{item['overlayheading3']} <b className="overlay-h2-green">{item['overlayheading4']}</b>{item['overlayheading5']}</h2></div>
                        <div className="overlay-heading-line"></div>

                        <div className="overlay-ul">
                            <div className="overlay-ul-left">
                                <ul>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe1']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe2']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe3']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe4']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe5']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe6']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe7']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span>{item['globe8']} </span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe9']}</span></li>
                                </ul>
                            </div>

                            <div className="overlay-ul-right">

                                <ul>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe10']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe11']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe12']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span>{item['globe13']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe14']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe15']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe16']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe17']}</span></li>
                                    <li><span className="yellow"> <i aria-hidden="true" class="fas fa-globe"></i></span> <span> {item['globe18']}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
               ))}
        </>
    )
}

export default Overlay
