
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import './AdminAlert.css';

const Admin = () => {
  const navigate = useNavigate();
  

  // Function to handle logout
  const handleLogout = () => {
    // Clear the login status from localStorage
    localStorage.removeItem('isLoggedIn');

    // Redirect to the homepage
    navigate('/');
  };
 

  // useEffect(()=>{
  //   if(!localStorage.getItem('isloggedIn')){
  //     navigate('/');
  //   }
  // }, [])
  useEffect(()=>{
   if(!localStorage.getItem('isLoggedIn')){
      navigate('/')
   }
  },[])

  return (
    <div className="admin-container">
      <div className="admin-button">
      
      <div className="admin-logout">
         
        <button onClick={handleLogout}>Logout</button>
      </div>
      
      </div>
      <div className="admin-heading"><h2>Welcome To Panfilla Admin Panel</h2></div>
      <div className="admin-row">
                    {/* Alert Functionality */}
                  <div className="admin-col">
                    <div className="admin-alert"><h2>TOP-ALERT</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/alertedit" ><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertview" ><button>View</button></Link></div>
                    </div>
                 </div>
                 <div className="admin-col">
                    <div className="admin-alert"><h2>NAVBAR</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/EditNavbar" ><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertnavbar" ><button>View</button></Link></div>
                    
                    </div>
                    </div>

                 <div className="admin-col">
                    <div className="admin-alert"><h2>BANNER</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/EditBanner" ><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertbanner" ><button>View</button></Link></div>
                    </div>
                 </div>

                 <div className="admin-col">
                    <div className="admin-alert"><h2>CONTENT</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editcontent" ><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertcontent" ><button>View</button></Link></div>
                    </div>
                 </div>
                 
                 <div className="admin-row">
                    {/* Alert Functionality */}
                  <div className="admin-col">
                    <div className="admin-alert"><h2>OURSERVICES</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editourservices"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertourservices" ><button>View</button></Link></div>
                    </div>
                 </div>

                 <div className="admin-col">
                    <div className="admin-alert"><h2>OVERLAY</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editoverlay"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertoverlay" ><button>View</button></Link></div>
                    </div>
                 </div>

                 <div className="admin-col">
                    <div className="admin-alert"><h2>RECOGNIZATION</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editrec"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertrecog" ><button>View</button></Link></div>
                    </div>
                 </div>
                 <div className="admin-col">
                    <div className="admin-alert"><h2>LATESTWORK</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editlatestwork"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertlatest" ><button>View</button></Link></div>
                    </div>
                 </div>
                 </div>
                 <div className="admin-row">
                    {/* Alert Functionality */}
                  <div className="admin-col">
                    <div className="admin-alert"><h2>TESTIMONIALS</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/edittestimonials"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alerttesti" ><button>View</button></Link></div>
                    </div>
                 </div>

                 <div className="admin-col">
                    <div className="admin-alert"><h2>FOOTER</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><button>Edit</button></div>
                    <div className="admin-edit"><Link to="/alertfooter" ><button>View</button></Link></div>
                    </div>
                 </div>

                 <div className="admin-col">
                    <div className="admin-alert"><h2>USERFORM</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editform"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertform" ><button>View</button></Link></div>
                    </div>
                    </div>
                    <div className="admin-col">
                    <div className="admin-alert"><h2>WHY CHOOSE US</h2></div>
                    <div className="admin-btn"> 
                    <div className="admin-edit"><Link to="/editwcu"><button>Edit</button></Link></div>
                    <div className="admin-edit"><Link to="/alertcontent2" ><button>View</button></Link></div>
                    </div>
                 </div>
                   
                
                 </div>


               
             

     
    </div>
    </div>
  );
};

export default Admin;
