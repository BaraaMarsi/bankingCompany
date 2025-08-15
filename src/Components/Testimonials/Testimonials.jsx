import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Testimonials.css';
import TestiData from '../../Data/TestiData';
import Button from '../Button/Button';
import Section from '../Section/Section';
import Card from '../Card/Card';

const Testimonials = () => {
  const [sliderData, setSliderData] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeCategory, setActiveCategory] = useState('individuals');
  const swiperRef = useRef(null);  

  useEffect(() => {
    setSliderData(TestiData.individualsData);
  }, []);

const handleChangeData = (category) => {
  setIsTransitioning(true);
  setActiveCategory(category);

  let newData = [];

  if (category === 'individuals') {
    newData = TestiData.individualsData;
  } else if (category === 'businesses') {
    newData = TestiData.businessesData;
  }

  
  setTimeout(() => {
    setSliderData(newData);
    setIsTransitioning(false);
  }, 300);
};

  return (
    <div className="testimonials-section container padding_Buttom">
      <div className="testimonials">
        <div className="testimonials-header">
          <div className="header-left">
            <Section
              title={"Our "}
              titleSpan={"Testimonials"}
              desc={"Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"}
            />
          </div>

          <div className="header-right">
            <Button
              text={"For Individuals"}
              className={`Na-forindividuals ${activeCategory === 'individuals' ? 'active-button' : ''}`}
              onClick={() => handleChangeData('individuals')}
            />
            <Button
              text={"For Businesses"}
              className={`Na-forbusinesses ${activeCategory === 'businesses' ? 'active-button' : ''}`}
              onClick={() => handleChangeData('businesses')}
            />
          </div>
        </div>

          <Swiper
            key={activeCategory} 
            className={isTransitioning ? 'slider-fade' : 'slider-show'}
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            loop={sliderData.length > 3}
            slidesPerGroup={1}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
           breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 50,
              },
              1439: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 60,
              },
            }}
          >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
            
              <Card
                section={{
                  imageUrl: item.imageUrl,
                  imageAlt: item.imageAlt,
                  title: item.title,
                  desc: item.desc,
                  testName: item.testName,
                }}
              />
            </SwiperSlide>
          ))}

          <div className="mobile-nav">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;