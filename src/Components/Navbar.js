
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
  //for responsive navbar button
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  //
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/navbar')
      .then((res) => {
        // Assuming the JSON server response is an array of objects with 'alert-text1' property
        setData(res.data);
       
      })
      .catch((err) => console.log(err));
  }, []);

   


  return (
    <>
      
      {data.map((item, i) => (
        <nav key={i}>
        <div className="logo">
          <img
            src={item['navlogo']}
            alt="Company Logo"
          />
        </div>
        <div className={`menu${menuVisible ? ' active' : ''}`}>
          <ul>
            <li className="nav-home">
              <Link to="/">{item['navheadertext1']}</Link>
            </li>
            <li className="dropdown">
              <Link to="/">{item['navheadertext2']}</Link>
              <div className="dropdown-content">
                <Link to="/">{item['nht2Dropdown1']}</Link>
                <Link to="/">{item['nht2Dropdown2']}</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/">{item['navheadertext3']}</Link>
              <div className="dropdown-content">
                <Link to="/">WEBSITE DESIGN </Link>
                <Link to="/">WEBSITE REDESIGN</Link>
                <Link to="/">INFORGRAPHICS DESIGN</Link>
                <Link to="/">SOCIAL MEDIA DESIGN</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/">{item['navheadertext4']}</Link>
              <div className="dropdown-content">
                <Link to="/">ECOMMERCE DEVELOPMENT</Link>
                <Link to="/">ECOMMERCE OPTIMIZATION</Link>
                <Link to="/">SEO SERVICE</Link>
                <Link to="/">LOCAL SEO SERVICE</Link>
              </div>
            </li>
            <li> <Link to="/login" >{item['navbutton']}</Link></li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuVisible ? (
            <i className="fas fa-times bl" />
          ) : (
            <i className="fas fa-bars bl" />
          )}
        </div>
        </nav>
      ))}
   
    </>
  );
};

export default Navbar;
