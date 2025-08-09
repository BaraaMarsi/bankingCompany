import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import './Testimonials.css';
import TestData from '../../Data/TestData';
import Button from '../Button/Button';
import Section from '../Section/Section'
const Testimonials = () => {
    const Testimonials = TestData;
    return (
        
  <div className="testimonials container">
  <div className="testimonials-header">
    <div class="header-left">
   <Section
  title="Our"
  titleSpan="Testimonials"
  desc="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. 
  See why our clients trust us for a secure and prosperous financial journey"
  flex={false}
/>
</div>
    <div className="header-right">
      <Button text={"For Individuals"} to={"/signup"} className={"Na-forindividuals"} />
      <Button text={"For Businesses"} to={"/signup"} className={"Na-forbusinesses"} />
    </div>
  </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        loop={false}
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.image} alt={item.title} className="testimonial-image" />
              <h3>{item.title} <span>({item.span})</span></h3>
              <h4>{item.secondTitle}</h4>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

}

export default Testimonials;
