import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import { useLocation } from 'react-router-dom';

function Body() {
    const location = useLocation();
  const bannerData = [
    {
      val: "26+",
      details: "PROJECTS ACROSS PUNE",
    },
    {
      val: "16 YEARS",
      details: "OF MATCHLESS LEGACY",
    },
    {
      val: "8 MILLION",
      details: "SQUARE FEET DELIVERED",
    },
    {
      val: "5K+",
      details: "HAPPY FAMILY",
    },
  ];


  return (
    <>
      <div className="body-info"></div>
      <div className="info">
        {bannerData.map((project, ele) => {
          return <Banner key={ele} {...project} />;
        })}
      </div>
      <h3 className="banner-details">Our Properties</h3>
      <div className="paragraph">
      <p>
        At Real Estate, we understand that a home is more than just a
        place to live. It’s a place where you can pursue your passions, create
        memories with your loved ones, and build a life that you’ve always
        dreamed of
      </p>
      </div>
      <div id="about">
      <AboutUs/>
      </div>
    </>
  );
}

export default Body;
