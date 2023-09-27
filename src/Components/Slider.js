import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Slider.css";

const images = [
  'https://monkconsultancy.com/wp-content/uploads/2023/09/4.png',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/5.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/6.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/4.png',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/5.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/6.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/4.png',
   'https://monkconsultancy.com/wp-content/uploads/2023/09/4.png',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/5.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/6.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/4.png',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/5.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/6.jpg',
  'https://monkconsultancy.com/wp-content/uploads/2023/09/4.png',
];

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
       breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='slider'>
      <h1 style={{  color: "white", marginTop: "100px", marginLeft: "60px", fontStyle: "inherit",
       color: "yellow", fontWeight:"bold" }}>
       <i> Our Happy Clients</i>
      </h1>
      <div className='main-slider'>
        <Carousel
          responsive={responsive}
          containerClass='carousel-container'
          autoPlay
          autoPlaySpeed={3000} 
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "80px",
            marginTop: "30px",
            overflow: "hidden",
            width: "90%",
          }}
        >
          {images.map((item, i) => (
            <div key={i} className='carousel-item'>
              <img src={item} alt={`Slide ${i + 1}`} style={{ width: "300px", marginLeft: "10px" }} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
