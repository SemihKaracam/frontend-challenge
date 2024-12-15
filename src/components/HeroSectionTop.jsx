import React from 'react'
import AdvanceSearchIcon from "../assets/icon_advance_search.svg"
import NormalSearchIcon from "../assets/icon_normal_search.svg"
import SliderImgTop from "../assets/bed-image.jpg"
import SmallPic1 from "../assets/small-pic1.jpg"
import SmallPic2 from "../assets/small-pic2.jpg"
import SmallPic3 from "../assets/small-pic3.jpg"
import SmallPic4 from "../assets/small-pic4.jpg"
import SmallPic5 from "../assets/small-pic5.jpg"
import SmallPic6 from "../assets/small-pic6.jpg"
import ImageWhoAreWe2 from "../assets/image_whoarewe_2.jpg"
import ImageWhoAreWe3 from "../assets/image_whoarewe_3.jpg"
import "../components/styles/herosectiontop.css"
// import CircleBg from "../assets/circle_bg.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// const HeroSectionTop = () => {
//     return (
//         <div className='w-full pt-20'>
//             <h4 className='text-sub-color1 mb-3'>REAL ESTATE</h4>
//             <div className='flex w-full'>
//                 <div className='flex w-2/3 flex-col items-start gap-4'>
//                     <h1 className='text-col-text-1'>Find a perfect <br /> home you love..!</h1>
//                     <p className='text-col-text-3'>
//                         Lorem Ipsum has been the industry's standard dummy text ever since <br /> the 1500s, when an unknown printer took a galley
//                     </p>
//                     <div className="w-[600px] rounded">
//                         <Swiper
//                             modules={[Navigation, Pagination]}
//                             spaceBetween={30}
//                             slidesPerView={1}
//                             speed={500}
//                             navigation
//                             pagination={{ clickable: true }}
//                             loop={true}
//                             className="rounded-2xl"
//                         >
//                             <SwiperSlide>
//                                 <img
//                                     // src={Room1}
//                                     src={SliderImgTop}
//                                     alt="Room 1"
//                                     className="w-full h-[360px] object-cover rounded-2xl "
//                                 />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <img
//                                     // src={Room2}
//                                     src={ImageWhoAreWe2}
//                                     alt="Room 2"
//                                     className=" w-full h-[360px] object-cover rounded-2xl "
//                                 />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <img
//                                     // src={Room3}
//                                     src={ImageWhoAreWe3}
//                                     alt="Room 3"
//                                     className=" w-full h-[360px] object-cover rounded-2xl "
//                                 />
//                             </SwiperSlide>
//                         </Swiper>
//                     </div>
//                 </div>
//                 <div className='w-1/3'>
//                     <form action="" className='w-full h-[90%] rounded-[2rem] shadow-custom'>
//                         <div className='flex border-b-2 justify-center gap-20 px-10 gap-6 mb-8'>
//                             <h5 className='text-primary-color border-b-4 w-2/5 pb-4 text-center border-primary-color'>For Sale</h5>
//                             <h5>For Rent</h5>
//                         </div>
//                         <div className='flex flex-col gap-8 px-10 py-8'>
//                             <input placeholder='New York, San Francisco, etc' className='w-full bg-[#F6F6F6] px-6 py-4 rounded-[20px]' type="text" />
//                             <select className='text-col-text-3 bg-[#F6F6F6] px-2 py-3 w-full rounded-[20px] px-6 py-4' type="text">
//                                 <option disabled selected>Select Property Type</option>
//                             </select>
//                             <select defaultValue='Select Rooms' className='w-full text-col-text-3 bg-[#F6F6F6] px-2 py-3 rounded-[20px] px-6 py-4' type="text">
//                                 <option disabled selected>Select Property Type</option>
//                             </select>
//                             <div className='flex items-center gap-2'>
//                                 <img className='h-3 w-3' src={AdvanceSearchIcon} alt="" />
//                                 <span className='text-primary-color small-paragraph'>Advance Search</span>
//                             </div>
//                         </div>
//                         <div className='px-10'>
//                             <button type='button' className='bg-primary-color w-full mt-12 flex justify-center items-center gap-3 py-4 text-white rounded-[48px]'>
//                                 <img className='h-5 w-5' src={NormalSearchIcon} alt="" />
//                                 <span>Search</span>
//                             </button>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//             <div className='flex gap-8 items-center justify-center w-100 mt-8'>
//                 <div className='flex items-center gap-3 shadow-custom rounded-[48px] px-9 py-6'>
//                     <div className='avatars'>
//                         <div className='avatar'>
//                             <img className='object-cover' src={SmallPic1} alt="" />
//                         </div>
//                         <div className='avatar'>
//                             <img className='object-cover' src={SmallPic2} alt="" />
//                         </div>
//                         <div className='avatar'>
//                             <img className='object-cover' src={SmallPic3} alt="" />
//                         </div>
//                         <div className='avatar'>
//                             <img className='object-cover' src={SmallPic4} alt="" />
//                         </div>
//                         <div className='avatar'>
//                             <img className='object-cover' src={SmallPic5} alt="" />
//                         </div>
//                         <div className='avatar'>
//                             <img className='object-cover' src={SmallPic5} alt="" />
//                         </div>
//                     </div>
//                     <h4>72k+ Happy <br />Customers</h4>
//                 </div>
//                 <div className='flex items-center gap-3 shadow-custom rounded-[48px] px-9 py-6'>
//                     <img className='w-[60px] h-[60px] object-cover rounded-[50%]' src={SmallPic6} alt="" />
//                     <h4>200+ New <br />Listings Everyday!</h4>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSectionTop



const HeroSectionTop = () => {
    return (
        <div className='w-full pt-20'>
            <h4 className='text-sub-color1 mb-3 '>REAL ESTATE</h4>
            <div className='flex flex-col xl:flex-row w-full'>
                <div className='flex w-full xl:w-2/3 flex-col xl:items-start gap-4'>
                    <h1 className='text-col-text-1 text-left md:text-left xl:text-left'>Find a perfect <br /> home you love..!</h1>
                    <p className='text-col-text-3 text-left xl:text-left'>
                        Lorem Ipsum has been the industry's standard dummy text ever since <br className='hidden xl:block' /> the 1500s, when an unknown printer took a galley
                    </p>
                    <div className="w-full xl:w-[600px] rounded">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            speed={500}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            className="rounded-2xl"
                        >
                            <SwiperSlide>
                                <img
                                    src={SliderImgTop}
                                    alt="Room 1"
                                    className="w-full h-[300px] xl:h-[360px] object-cover rounded-2xl "
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={ImageWhoAreWe2}
                                    alt="Room 2"
                                    className="w-full h-[300px] xl:h-[360px] object-cover rounded-2xl "
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={ImageWhoAreWe3}
                                    alt="Room 3"
                                    className="w-full h-[300px] xl:h-[360px] object-cover rounded-2xl "
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='w-full xl:w-1/3 mt-8 xl:mt-0'>
                    <form action="" className='w-full h-full rounded-[2rem] shadow-custom p-4 xl:p-10'>
                        <div className='flex flex-col xl:flex-row border-b-2 justify-center gap-6 xl:gap-20 mb-8'>
                            <h5 className='text-primary-color border-b-4 w-full xl:w-2/5 pb-4 text-center border-primary-color'>For Sale</h5>
                            <h5 className='w-full xl:w-2/5 text-center'>For Rent</h5>
                        </div>
                        <div className='flex flex-col gap-4 xl:gap-8'>
                            <input placeholder='New York, San Francisco, etc' className='w-full bg-[#F6F6F6] px-4 xl:px-6 py-2 xl:py-4 rounded-[20px]' type="text" />
                            <select className='text-col-text-3 bg-[#F6F6F6] px-4 xl:px-6 py-2 xl:py-4 w-full rounded-[20px]'>
                                <option disabled selected>Select Property Type</option>
                            </select>
                            <select defaultValue='Select Rooms' className='w-full text-col-text-3 bg-[#F6F6F6] px-4 xl:px-6 py-2 xl:py-4 rounded-[20px]'>
                                <option disabled selected>Select Rooms</option>
                            </select>
                            <div className='flex items-center gap-2'>
                                <img className='h-3 w-3' src={AdvanceSearchIcon} alt="" />
                                <span className='text-primary-color small-paragraph'>Advance Search</span>
                            </div>
                        </div>
                        <div className='px-4 xl:px-10'>
                            <button type='button' className='bg-primary-color w-full mt-8 xl:mt-12 flex justify-center items-center gap-3 py-3 xl:py-4 text-white rounded-[48px]'>
                                <img className='h-4 xl:h-5 w-4 xl:w-5' src={NormalSearchIcon} alt="" />
                                <span>Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-4 xl:gap-8 items-center justify-center w-full mt-8'>
                <div className='flex items-center gap-3 shadow-custom rounded-[48px] px-4 xl:px-9 py-4 xl:py-6'>
                    <div className='avatars flex'>
                        {[SmallPic1, SmallPic2, SmallPic3, SmallPic4, SmallPic5].map((src, index) => (
                            <div className='avatar' key={index}>
                                <img className='object-cover' src={src} alt='' />
                            </div>
                        ))}
                    </div>
                    <h4>72k+ Happy <br />Customers</h4>
                </div>
                <div className='flex items-center gap-3 shadow-custom rounded-[48px] px-4 xl:px-9 py-4 xl:py-6'>
                    <img className='w-[40px] xl:w-[60px] h-[40px] xl:h-[60px] object-cover rounded-[50%]' src={SmallPic6} alt="" />
                    <h4>200+ New <br />Listings Everyday!</h4>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionTop
