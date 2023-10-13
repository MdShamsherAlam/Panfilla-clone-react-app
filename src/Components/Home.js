import React from "react";
import Banner from "./Banner";
import Content1 from "./Content1";
import OurServices from "./OurServices";
import Latestwork from "./Latestwork";

import Content2 from "./Content2";
import Overlay from "./Overlay";
import Testimonials from "./Testimonials";
import Recognization from "./Recognization";
import Form from "./Form";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Alert/>
      <Navbar />
      <Banner />
      <Content1 />
      <OurServices />
      <Latestwork />
      <Form />
      <Content2 />
      <Overlay />
      <Testimonials />
      <Recognization />
      <Footer/>
    </div>
  );
};

export default Home;
