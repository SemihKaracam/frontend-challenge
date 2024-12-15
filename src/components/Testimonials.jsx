


import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import IconTirnak from "../assets/icon-tirnak.svg";
import IconAvatar from "../assets/icon-test-avatar.jpg";
import IconStars from "../assets/icon_stars.svg";

const testimonialsData = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    name: "Barbara D. Smith",
    avatar: IconAvatar,
    stars: IconStars,
  },
  {
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "John Doe",
    avatar: IconAvatar,
    stars: IconStars,
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    name: "Alice Johnson",
    avatar: IconAvatar,
    stars: IconStars,
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Swiper navigation için referanslar
    if (prevRef.current && nextRef.current) {
      console.log("Navigation refs connected");
    }
  }, []);

  return (
    <div className="mt-[100px] relative">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        {/* Sol Taraf */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sub-color1 mb-4">Testimonials</h4>
          <h2 className='text-[36px] xl:40px' >Look What Our <br /> Customers Say!</h2>
          <p className="text-col-text-2">
            Fusce venenatis tellus a felis scelerisque, non <br />
            pulvinar est pellentesque.
          </p>
          {/* Özel Slider Okları */}
          <div className="swiper-custom-navigation flex gap-4 mt-6">
            <button
              ref={prevRef}
              className="text-sub-color1 swiper-button-prev-custom w-[40px] h-[40px] border border-sub-color1 rounded-full flex items-center justify-center"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="swiper-button-next-custom text-sub-color1 w-[40px] h-[40px] border border-sub-color1 rounded-full flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Sağ Taraf - Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Navigation butonlarını Swiper'a bağla
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="xl:w-[500px] w-[320px]  shadow-custom rounded-[28px]"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index} className="p-[16px]">
              <div className="px-[20px] py-[12px] rounded-[28px] bg-white">
                <img src={IconTirnak} className="w-[48px] h-[32px]" alt="quote" />
                <h4 className="py-4 text-col-text-1 leading-relaxed">{item.text}</h4>
                <div className="border-t-2 pt-6 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      className="w-[48px] h-[48px] rounded-[50%] object-cover"
                      alt={item.name}
                    />
                    <h5>{item.name}</h5>
                  </div>
                  <img src={item.stars} alt="stars" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
