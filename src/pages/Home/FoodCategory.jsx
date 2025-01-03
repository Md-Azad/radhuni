import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const FoodCategory = () => {
  return (
    <section className="ml-4 md:ml-0">
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 10am to 10pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="-mt-16 text-3xl  text-white text-center uppercase">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" />
          <h3 className="-mt-16 text-3xl  text-white text-center uppercase">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" />
          <h3 className="-mt-16 text-3xl  text-white text-center uppercase">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} alt="" />
          <h3 className="-mt-16 text-3xl  text-white text-center uppercase">
            cakes
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} alt="" />
          <h3 className="-mt-16 text-3xl  text-white text-center uppercase">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategory;
