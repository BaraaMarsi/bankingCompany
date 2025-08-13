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
  const swiperRef = useRef(null);  // مرجع للسويبر

  useEffect(() => {
    setSliderData(TestiData.individualsData);
  }, []);

  const handleChangeData = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);

    setTimeout(() => {
      if (category === 'individuals') {
        setSliderData(TestiData.individualsData);
      } else if (category === 'businesses') {
        setSliderData(TestiData.businessesData);
      }
      setIsTransitioning(false);

      // تحديث السويبر بعد تغيير البيانات
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
        swiperRef.current.swiper.slideTo(0); // أرجع للسلايد الأول بعد التحديث
      }
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
          ref={swiperRef}
          className={isTransitioning ? 'slider-fade' : 'slider-show'}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          loop={sliderData.length > 3}
          slidesPerView={sliderData.length < 3 ? sliderData.length : 3}
          slidesPerGroup={1}
          centeredSlides={true}
          key={activeCategory} // يعيد تهيئة السويبر عند تغيير القيمة
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
            992: {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 50,
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