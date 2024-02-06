// PropertyCard.js
import React from 'react';

// import './PropertyCard.css'; // Import the CSS file

const PropertyCard = ({ propertyData }) => {
    console.log("propertyData",propertyData)
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={propertyData.img} alt="Property" />
      </div>
      <div className="property-details">
        <h2>{propertyData.title}</h2>
        <p>{propertyData.description}</p>
        <p>Location: {propertyData.location}</p>
        <p>Price: ₹{propertyData.price}</p>
        <p>Configs: {propertyData.configs}BHK</p>
        <p>Bathrooms: {propertyData.bathrooms}</p>
        <p>Area: {propertyData.area} sq ft</p>
      </div>
    </div>
  );
};

export default PropertyCard;
