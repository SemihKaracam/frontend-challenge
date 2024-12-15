// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination } from 'swiper/modules';
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import WhatsTrending1 from "../assets/whatstrending1.jpg"
// import WhatsTrending2 from "../assets/whatstrending2.jpg"
// import WhatsTrending3 from "../assets/whatstrending3.jpg"
// const WhatsTrending = () => {
//     return (
//         <div className='bg-primary-color px-[120px] py-[80px] flex flex-col justify-center gap-6'>
//             <h4 className='text-white text-center'>WHAT'S TRENDING</h4>
//             <h2 className='text-white text-center'>Latest Blogs & Posts</h2>
//             <div className='mt-10'>
//                 <Swiper
//                     modules={[Navigation, Pagination]}
//                     spaceBetween={30}
//                     slidesPerView={3}
//                     speed={1000}
//                     navigation
//                     pagination={{ clickable: true }}
//                     loop={true}
//                     className="rounded-2xl"
//                 >
//                     <SwiperSlide>
//                         <div className='text-white'>
//                             <div className='w-[340px] h-[240px]'>
//                                 <img
//                                     src={WhatsTrending1}
//                                     alt="Room 1"
//                                     className="w-full h-full object-cover rounded-2xl "
//                                 />
//                             </div>
//                             <h3 className='py-3'>Top 10 Home Buying <br />Mistakes to Avoid</h3>
//                             <p className='text-col-text-5'>Etiam eget elementum elit. Aenean <br /> dignissim dapibus vestibulum</p>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='text-white'>
//                             <div className='w-[340px] h-[240px]'>
//                                 <img
//                                     src={WhatsTrending2}
//                                     alt="Room 1"
//                                     className="w-full h-full object-cover rounded-2xl "
//                                 />
//                             </div>
//                             <h3 className='py-3'>How to Stage Your <br /> Home for a Quick Sale</h3>
//                             <p className='text-col-text-5'>Nullam odio lacus, dictum quis pretium <br /> congue, vehicula venenatis nunc.</p>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='text-white'>
//                             <div className='w-[340px] h-[240px]'>
//                                 <img
//                                     src={WhatsTrending3}
//                                     alt="Room 1"
//                                     className="w-full h-full object-cover rounded-2xl "
//                                 />
//                             </div>
//                             <h3 className='py-3'>5 Tips for First-Time <br /> Home Sellers</h3>
//                             <p className='text-col-text-5'>In hac habitasse platea dictumst. <br /> Phasellus vel velit vel augue maximus.</p>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </div>
//     )
// }

// export default WhatsTrending













// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import WhatsTrending1 from '../assets/whatstrending1.jpg';
// import WhatsTrending2 from '../assets/whatstrending2.jpg';
// import WhatsTrending3 from '../assets/whatstrending3.jpg';

// const WhatsTrending = () => {
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);
//     const paginationRef = useRef(null);

//     const swiperParams = {
//         modules: [Navigation, Pagination],
//         spaceBetween: 30,
//         slidesPerView: 3,
//         speed: 1000,
//         navigation: {
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//         },
//         pagination: {
//             clickable: true,
//             el: paginationRef.current,
//         },
//         loop: true,
//         className: 'rounded-2xl',
//     };

//     return (
//         <div className="bg-primary-color px-[120px] py-[80px] flex flex-col justify-center gap-6 relative">
//             {/* Başlık */}
//             <h4 className="text-white text-center text-sm tracking-wide">WHAT'S TRENDING</h4>
//             <h2 className="text-white text-center text-3xl font-semibold">
//                 Latest Blogs & Posts
//             </h2>

//             {/* Swiper Container */}
//             <div className="relative mt-10">
//                 {/* Özel Sol ve Sağ Oklar */}
//                 <button
//                     ref={prevRef}
//                     className="absolute top-[50%] left-[-50px] z-10 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition"
//                 >
//                     ←
//                 </button>
//                 <button
//                     ref={nextRef}
//                     className="absolute top-[50%] right-[-50px] z-10 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition"
//                 >
//                     →
//                 </button>

//                 {/* Swiper Slider */}
//                 <Swiper {...swiperParams}>
//                     {/* Slide 1 */}
//                     <SwiperSlide>
//                         <div className="text-white relative">
//                             {/* Tarih Kutusu */}
//                             <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
//                                 <span className="block text-sm font-bold">28</span>
//                                 <span className="block text-xs font-medium">TUE</span>
//                             </div>
//                             {/* Resim */}
//                             <div className="w-[340px] h-[240px]">
//                                 <img
//                                     src={WhatsTrending1}
//                                     alt="Top 10 Home Buying Mistakes"
//                                     className="w-full h-full object-cover rounded-2xl"
//                                 />
//                             </div>
//                             {/* İçerik */}
//                             <h3 className="py-3 text-lg font-semibold">
//                                 Top 10 Home Buying <br />
//                                 Mistakes to Avoid
//                             </h3>
//                             <p className="text-col-text-5 text-sm">
//                                 Etiam eget elementum elit. Aenean <br />
//                                 dignissim dapibus vestibulum.
//                             </p>
//                         </div>
//                     </SwiperSlide>

//                     {/* Slide 2 */}
//                     <SwiperSlide>
//                         <div className="text-white relative">
//                             <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
//                                 <span className="block text-sm font-bold">08</span>
//                                 <span className="block text-xs font-medium">MON</span>
//                             </div>
//                             <div className="w-[340px] h-[240px]">
//                                 <img
//                                     src={WhatsTrending2}
//                                     alt="How to Stage Your Home"
//                                     className="w-full h-full object-cover rounded-2xl"
//                                 />
//                             </div>
//                             <h3 className="py-3 text-lg font-semibold">
//                                 How to Stage Your <br />
//                                 Home for a Quick Sale
//                             </h3>
//                             <p className="text-col-text-5 text-sm">
//                                 Nullam odio lacus, dictum quis pretium <br />
//                                 congue, vehicula venenatis nunc.
//                             </p>
//                         </div>
//                     </SwiperSlide>

//                     {/* Slide 3 */}
//                     <SwiperSlide>
//                         <div className="text-white relative">
//                             <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
//                                 <span className="block text-sm font-bold">26</span>
//                                 <span className="block text-xs font-medium">WED</span>
//                             </div>
//                             <div className="w-[340px] h-[240px]">
//                                 <img
//                                     src={WhatsTrending3}
//                                     alt="5 Tips for Home Sellers"
//                                     className="w-full h-full object-cover rounded-2xl"
//                                 />
//                             </div>
//                             <h3 className="py-3 text-lg font-semibold">
//                                 5 Tips for First-Time <br />
//                                 Home Sellers
//                             </h3>
//                             <p className="text-col-text-5 text-sm">
//                                 In hac habitasse platea dictumst. <br />
//                                 Phasellus vel velit vel augue maximus.
//                             </p>
//                         </div>
//                     </SwiperSlide>
//                     {/* Slide 1 */}
//                     <SwiperSlide>
//                         <div className="text-white relative">
//                             {/* Tarih Kutusu */}
//                             <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
//                                 <span className="block text-sm font-bold">28</span>
//                                 <span className="block text-xs font-medium">TUE</span>
//                             </div>
//                             {/* Resim */}
//                             <div className="w-[340px] h-[240px]">
//                                 <img
//                                     src={WhatsTrending1}
//                                     alt="Top 10 Home Buying Mistakes"
//                                     className="w-full h-full object-cover rounded-2xl"
//                                 />
//                             </div>
//                             {/* İçerik */}
//                             <h3 className="py-3 text-lg font-semibold">
//                                 Top 10 Home Buying <br />
//                                 Mistakes to Avoid
//                             </h3>
//                             <p className="text-col-text-5 text-sm">
//                                 Etiam eget elementum elit. Aenean <br />
//                                 dignissim dapibus vestibulum.
//                             </p>
//                         </div>
//                     </SwiperSlide>

//                     {/* Slide 2 */}
//                     <SwiperSlide>
//                         <div className="text-white relative">
//                             <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
//                                 <span className="block text-sm font-bold">08</span>
//                                 <span className="block text-xs font-medium">MON</span>
//                             </div>
//                             <div className="w-[340px] h-[240px]">
//                                 <img
//                                     src={WhatsTrending2}
//                                     alt="How to Stage Your Home"
//                                     className="w-full h-full object-cover rounded-2xl"
//                                 />
//                             </div>
//                             <h3 className="py-3 text-lg font-semibold">
//                                 How to Stage Your <br />
//                                 Home for a Quick Sale
//                             </h3>
//                             <p className="text-col-text-5 text-sm">
//                                 Nullam odio lacus, dictum quis pretium <br />
//                                 congue, vehicula venenatis nunc.
//                             </p>
//                         </div>
//                     </SwiperSlide>

//                     {/* Slide 3 */}
//                     <SwiperSlide>
//                         <div className="text-white relative">
//                             <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
//                                 <span className="block text-sm font-bold">26</span>
//                                 <span className="block text-xs font-medium">WED</span>
//                             </div>
//                             <div className="w-[340px] h-[240px]">
//                                 <img
//                                     src={WhatsTrending3}
//                                     alt="5 Tips for Home Sellers"
//                                     className="w-full h-full object-cover rounded-2xl"
//                                 />
//                             </div>
//                             <h3 className="py-3 text-lg font-semibold">
//                                 5 Tips for First-Time <br />
//                                 Home Sellers
//                             </h3>
//                             <p className="text-col-text-5 text-sm">
//                                 In hac habitasse platea dictumst. <br />
//                                 Phasellus vel velit vel augue maximus.
//                             </p>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>

//                 {/* Pagination */}
//                 <div ref={paginationRef} className="swiper-pagination mt-6 text-center"></div>
//             </div>
//         </div>
//     );
// };

// export default WhatsTrending;








import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WhatsTrending1 from '../assets/whatstrending1.jpg';
import WhatsTrending2 from '../assets/whatstrending2.jpg';
import WhatsTrending3 from '../assets/whatstrending3.jpg';

const WhatsTrending = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);

    return (
        <div className="bg-primary-color px-10 xl:px-40 py-[80px] flex flex-col justify-center gap-6 relative">
            {/* Başlık */}
            <h4 className="text-white text-center text-sm tracking-wide">WHAT'S TRENDING</h4>
            <h2 className="text-white text-center text-3xl font-semibold">Latest Blogs & Posts</h2>

            {/* Swiper Container (Geniş Ekranlar İçin) */}
            <div className="relative mt-10 hidden xl:block">
                <button
                    ref={prevRef}
                    className="absolute top-[50%] left-[-50px] z-10 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition"
                >
                    ←
                </button>
                <button
                    ref={nextRef}
                    className="absolute top-[50%] right-[-50px] z-10 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition"
                >
                    →
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    speed={1000}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    pagination={{ clickable: true, el: paginationRef.current }}
                    loop={true}
                    className="rounded-2xl"
                >
                    <SwiperSlide>
                        <TrendingCard
                            imgSrc={WhatsTrending1}
                            date="28"
                            day="TUE"
                            title="Top 10 Home Buying Mistakes to Avoid"
                            description="Etiam eget elementum elit. Aenean dignissim dapibus vestibulum."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingCard
                            imgSrc={WhatsTrending2}
                            date="08"
                            day="MON"
                            title="How to Stage Your Home for a Quick Sale"
                            description="Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingCard
                            imgSrc={WhatsTrending3}
                            date="26"
                            day="WED"
                            title="5 Tips for First-Time Home Sellers"
                            description="In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingCard
                            imgSrc={WhatsTrending3}
                            date="26"
                            day="WED"
                            title="5 Tips for First-Time Home Sellers"
                            description="In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
                        />
                    </SwiperSlide>
                </Swiper>
                <div ref={paginationRef} className="swiper-pagination mt-6 text-center"></div>
            </div>

            {/* Tekli Alt Alta Kartlar (Dar Ekranlar İçin) */}
            <div className="block xl:hidden flex flex-col gap-8">
                <TrendingCard
                    imgSrc={WhatsTrending1}
                    date="28"
                    day="TUE"
                    title="Top 10 Home Buying Mistakes to Avoid"
                    description="Etiam eget elementum elit. Aenean dignissim dapibus vestibulum."
                />
                <TrendingCard
                    imgSrc={WhatsTrending2}
                    date="08"
                    day="MON"
                    title="How to Stage Your Home for a Quick Sale"
                    description="Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
                />
                <TrendingCard
                    imgSrc={WhatsTrending3}
                    date="26"
                    day="WED"
                    title="5 Tips for First-Time Home Sellers"
                    description="In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
                />
            </div>
        </div>
    );
};

// Kart Bileşeni
const TrendingCard = ({ imgSrc, date, day, title, description }) => (
    <div className="text-white relative w-full mx-auto max-w-[280px]">
        {/* Tarih Kutusu */}
        <div className="absolute top-[20px] left-[20px] bg-white text-black px-3 py-2 rounded-lg shadow-md text-center">
            <span className="block text-sm font-bold">{date}</span>
            <span className="block text-xs font-medium">{day}</span>
        </div>
        {/* Resim */}
        <div className="w-[280px] xl:w-[340px] h-[240px] mx-auto">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* İçerik */}
        <h3 className="py-3 text-lg font-semibold">{title}</h3>
        <p className="text-col-text-5 text-sm">{description}</p>
    </div>
);

export default WhatsTrending;








