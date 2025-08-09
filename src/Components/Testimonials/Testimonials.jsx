import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import './Testimonials.css';
import TestiData from '../../Data/TestiData';
import Button from '../Button/Button';
import Section from '../Section/Section'
import Card from '../Card/Card';
const Testimonials = () => {
    let testimonialsIsData = TestiData;
    if(typeof window !=='undefined'){
      const stored = localStorage.getItem('testimonials')
      if(stored){
        try{
          testimonialsIsData = JSON.parse(stored)
        }
        catch(error){
          console.error('error')
          testimonialsIsData = TestiData
        }
        }
        else{
          localStorage.setItem('testimonials' , JSON.stringify(TestiData))
        }
      }
    
    return (
  <div className="testimonials-section">    
  <div className="testimonials container">
  <div className="testimonials-header">
    <div className="header-left">
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
        {testimonialsIsData.map((item, index) => (
      <SwiperSlide key={index}>
          <Card
            section={{
              imageUrl: item.imageUrl,
              imageAlt: item.title,
              title: item.title,
              desc: item.desc,
              testName: item.testName    
            }}
          />
       </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>  
  );

}

export default Testimonials;
