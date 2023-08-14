import React from 'react';
import { Swiper, SwiperSlide, Navigation, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Card.css';
import data from '../../utils/computer.json';
import { sliderSettings } from '../../utils/common';


const Card = () => {
  return (
    <div>
      <Swiper {...sliderSettings} navigation={{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }}>
         <SliderButton />
         <div className="card-container flexCenter">
          {data.computers.map((computer, index) => (
            <SwiperSlide key={index} style={{ width: '300px' }}  className="card-item ">
              <div className="contain-img">
                <img src={computer.image} alt="" className="card-img" />
              </div>
              <div className="card-text">
                <h3>{computer.name}</h3>
                <p>Model: {computer.model}</p>
                <p>Size: {computer.size}</p>
                <p>Capacity: {computer.capacity}</p>
                <p>
                  Price: <strong className="price">${computer.price}</strong>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
       
      </Swiper>
    </div>
  );
};

const SliderButton = () => {
    const swiper = useSwiper();
  
    const handlePrev = () => {
      swiper.slidePrev();
    };
  
    const handleNext = () => {
      swiper.slideNext();
    };
  
    return (
      <div className="slider-button-container ">
        <button className="slider-button-prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="slider-button-next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    );
  };
  
export default Card;

