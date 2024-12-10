import TestimonialsBg from "../../assets/testimonialsBg.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ReviewOne from "../../assets/reviewOne.jpg";
import ReviewTwo from "../../assets/reviewTwo.jpg";
import ReviewThree from "../../assets/reviewThree.jpg";
import ReviewFour from "../../assets/reviewFour.jpg";
import ReviewFive from "../../assets/reviewFive.jpg";
import "../../App.css"

SwiperCore.use([Autoplay]);

const Testimonials = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8
        h-auto sm:h-auto md:h-[30rem] lg:h-[40rem] xl:h-screen
        flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${TestimonialsBg})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-60"></div>


      <div className="w-full max-w-screen-xl px-4 sm:px-6">

        <div className="head">TESTIMONIALS</div>

        <Swiper
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {/* SwiperSlides */}
          <SwiperSlide className="swiper-slide" >
            <div className="px-4 py-4">
              <div className="testimonials-profile-circle">
                <img src={ReviewOne} alt="testimonial-image" className="testimonial-image" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique praesentium voluptate natus sunt, molestiae dolorum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique praesentium voluptate natus sunt, molestiae dolorum?
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="px-4 py-4">
              <div className="testimonials-profile-circle">
                <img src={ReviewTwo} alt="testimonial-image" className="testimonial-image" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, animi libero facere eligendi illo consectetur!
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="px-4 py-4">
              <div className="testimonials-profile-circle">
                <img src={ReviewThree} alt="testimonial-image" className="testimonial-image" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt id quaerat, quas minus cum provident?
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="px-4 py-4">
              <div className="testimonials-profile-circle">
                <img src={ReviewFour} alt="testimonial-image" className="testimonial-image" />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque culpa suscipit, ad iure esse nihil?
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="px-4 py-4">
              <div className="testimonials-profile-circle">
                <img src={ReviewFive} alt="testimonial-image" className="testimonial-image" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dicta, quibusdam dolor eligendi quaerat nulla.
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
