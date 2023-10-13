import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Banner from './Components/Banner';
// import Content1 from './Components/Content1';
// import Content2 from './Components/Content2';

// import Form from './Components/Form';
// import Latestwork from './Components/Latestwork';

// import OurServices from './Components/OurServices';
// import Overlay from './Components/Overlay';
// import Recognization from './Components/Recognization';
// import Testimonials from './Components/Testimonials';

import Home from "./Components/Home";
// import Loginbtn from './Components/Loginbtn';
import Login from "./AdminJson/Login";
import Admin from "./AdminJson/Admin";
import AdminAlert from "./AdminJson/AdminAlert";
import Alert from "./Components/Alert";
import Banner from "./Components/Banner";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import OurServices from "./Components/OurServices";
import Overlay from "./Components/Overlay";
import Recognization from "./Components/Recognization";
import Latestwork from "./Components/Latestwork";
import Testimonials from "./Components/Testimonials";
import Footer from  "./Components/Footer";
import Form from "./Components/Form";
import EditBanner from "./AdminJson/EditBanner";
import EditNavbar from "./AdminJson/EditNavbar";
import Navbar from "./Components/Navbar";
import EditContent1 from "./AdminJson/EditContent1";
import EditOurservices from "./AdminJson/EditOurservices";
import EditOverlay from "./AdminJson/EditOverlay";
import EditRecog from "./AdminJson/EditRecog";
import EditLatestwork from "./AdminJson/EditLatestwork";
import EditTestimonials from "./AdminJson/EditTestimonials";
import EditForm from "./AdminJson/EditForm";
import EditContent2 from "./AdminJson/EditContent2";
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Alert from './Components/Alert';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/alertedit" element={<AdminAlert />}></Route>
        <Route exact path="/alertview" element={<Alert />}></Route>
        <Route exact path="/EditNavbar" element={<EditNavbar />}></Route>
        <Route exact path="/alertnavbar" element={<Navbar />}></Route>
        <Route exact path="/EditBanner" element={<EditBanner />}></Route>
        <Route exact path="/alertbanner" element={<Banner />}></Route>
        <Route exact path="/alertcontent" element={<Content1 />}></Route>
        <Route exact path="/editcontent" element={<EditContent1 />}></Route>
        <Route exact path="/alertcontent2" element={<Content2 />}></Route>
        <Route exact path="/editwcu" element={<EditContent2 />}></Route>
        <Route exact path="/alertourservices" element={<OurServices />}></Route>
        <Route exact path="/editourservices" element={<EditOurservices />}></Route>
        <Route exact path="/alertoverlay" element={<Overlay />}></Route>
        <Route exact path="/editoverlay" element={<EditOverlay />}></Route>
        <Route exact path="/alertrecog" element={<Recognization />}></Route>
        <Route exact path="/editrec" element={<EditRecog />}></Route>
        <Route exact path="/alertlatest" element={<Latestwork />}></Route>
        <Route exact path="/editlatestwork" element={<EditLatestwork />}></Route>
        <Route exact path="/alerttesti" element={<Testimonials />}></Route>
        <Route exact path="/edittestimonials" element={<EditTestimonials />}></Route>
        <Route exact path="/alertfooter" element={<Footer />}></Route>
        <Route exact path="/alertform" element={<Form />}></Route>
        <Route exact path="/editform" element={<EditForm />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
