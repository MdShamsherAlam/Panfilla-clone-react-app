import React, { useEffect, useState } from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobile, faMessage,faStar } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:5000/footer")
      .then((res)=>{
      setData(res.data)
  
  
  
      })
      .catch((err)=>console.log(err))
  
  
  
  
  
  
  
    },[])
    return (
        <>
        {data.map((item,i)=>(



     
        <footer key={i}>
            <div className="footer-row">

                <div className="footer-col">
                    <div className="h3"><h3>{item['aboutus']}</h3></div>
                    <div className="p"><p>{item['aboutuspara']}.</p></div>
                </div>
                <div className="footer-col">
                    <div className="h3"><h3>{item['reachus']}</h3></div>
                    <div className="reachus">
                        <ul>
                            <li className="ad">

                                <div className="footer-icons"> <FontAwesomeIcon icon={faLocationDot} className="green-icons" />
                                </div>
                                <div className="address">
                                    <div className="add"><span className="grey">Address:</span></div>
                                    <div className="add"> <span className="grey">{item['Address']}</span></div>
                                </div>
                            </li>
                            <li className="ad">

                                <div className="footer-icons"> <FontAwesomeIcon icon={faMobile} className="green-icons" />

                                </div>
                                <div className="address">
                                    <div className="add"><span className="grey">Mobile:</span></div>
                                    <div className="add"> <span className="green">{item['Mobile']}</span></div>
                                </div>
                            </li>
                            <li className="ad">

                                <div className="footer-icons"> <FontAwesomeIcon icon={faMessage} className="green-icons" />
                                </div>
                                <div className="address">
                                    <div className="add"><span className="grey">Email:</span></div>
                                    <div className="add"> <span className="green">{item['email']}</span></div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="footer-col">
                    <img src={item['footerMainImg']} alt="" />
                </div>
                </div>
            
            <div className="footer-row2">
                <div className="footer-col2"><img src={item['googleImg']} alt="" /></div>
           
             <div className="footer-col2-1">
                  <div className="fc-1">
                    <div className="fc-row"><span className="span-rev">REVIEWED ON</span></div>
                    <div className="fc-clutch"><h3>{item['review']}</h3></div>
                   </div>
                 <div className="fc-2">
                    <div className="star">
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    </div>
                    <div className="review">
                        <span >1 REVIEW</span>
                    </div>
                 </div>
               </div>
               <div className="footer-col2 svg"><img src="https://assets.goodfirms.co/badges/white-button/profile-reviews.svg" alt="" /></div>
                <div className="footer-col2-2"><img src="https://www.appfutura.com/img/badges/badge-regular.png" alt="" /></div>
                 <div className="footer-col2"><img src="https://www.topdevelopers.co/assets/badges/app-2021/Web-Development/rectangle-Top-Web-Development-Companies-2021.png" alt="" /></div>
                 <div className="footer-col2-3">
                 <div className="jd1"><span >Jd</span></div>
                 <div className="jd2"><span >5.0</span></div>
                 <div className="jd3">
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                 </div>
                 </div>
            </div>
            <div className="footer-line"></div>
            <div className="footer-col3">
                <div className="footer-col3-img"><img src="https://panfila.in/wp-content/uploads/2021/06/PGS_WEBSITE_FT200_PNG.png" alt="" /></div>
          
            <div className="footer-col3-copyright"><p>  © Copyright 2022. All Rights Reserved. <span>Panfila® Global Solutions</span></p></div>
            </div>
          
        </footer>
           ))}
        </>
    )
}

export default Footer
