import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Slider {...settings}>
        
      <div>
        <img src="https://www.legacylifespaces.com/wp-content/uploads/2023/10/tulip-field-netherlands-holland.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="https://www.legacylifespaces.com/wp-content/uploads/2023/10/full-shot-kid-playing-bounce-house.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="https://www.legacylifespaces.com/wp-content/uploads/2023/10/equipments-gym.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="https://www.legacylifespaces.com/wp-content/uploads/2023/10/full-shot-old-man-sitting-bench.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="https://www.legacylifespaces.com/wp-content/uploads/2023/10/decorated-yellow-bicycle-beautiful-park.jpg" alt="Image 3" />
      </div>
      
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
