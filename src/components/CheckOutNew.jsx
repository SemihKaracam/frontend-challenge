// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination } from 'swiper/modules';
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import SliderCheckImg1 from "../assets/slider_check1.jpg"
// import SliderCheckImg2 from "../assets/slider_check2.jpg"
// import SliderCheckImg3 from "../assets/slider_check3.jpg"
// import SliderCheckImg4 from "../assets/slider_check4.jpg"
// import IconBath from "../assets/icon_bath.svg"
// import IconBed from "../assets/icon_bed.svg"
// import IconFire from "../assets/icon_fire.svg"
// import IconDolar from "../assets/icon_dolar.svg"
// import IconHome from "../assets/icon_home.svg"

// const CheckOutNew = () => {
//     return (
//         <div className='pb-[160px]'>
//             <div className='flex items-center justify-between flex-col xl:flex-row mb-12'>
//                 <div className='flex flex-col gap-5'>
//                     <h4 className='text-sub-color1'>CHECKOUT OUR NEW</h4>
//                     <h2>Latest Listed Properties</h2>
//                     <p className='text-col-text-3 pb-4'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, <br /> nec dignissim purus.</p>
//                 </div>
//                 <div className='flex gap-6 text-white'>
//                     <button className='text-sub-color1 border-2 border-primary-color rounded-[30px] px-8 py-3'>All</button>
//                     <button className='bg-primary-color rounded-[30px] px-8 py-3'>Sell</button>
//                     <button className='text-sub-color1 border-2 border-primary-color rounded-[30px] px-8 py-3'>Rent</button>
//                 </div>
//             </div>
//             <div>
//                 <Swiper
//                     spaceBetween={30}
//                     slidesPerView={3}
//                     speed={1000}
//                     loop={true}
//                     className="rounded-2xl"
//                 >
//                     <SwiperSlide>
//                         <div className='flex flex-col gap-4'>
//                             <div className='relative'>
//                                 <img
//                                     // src={Room1}
//                                     src={SliderCheckImg1}
//                                     alt="Room 1"
//                                     className="w-[320px] h-[320px] rounded-[30px] object-cover "
//                                 />
//                                 <button className='px-4 py-2 rounded-[16px] absolute bg-[#FFE1E1] bottom-[20px] left-[20px] flex items-center gap-3'>
//                                     <img className='w-5 h-5' src={IconFire}/>
//                                     <span className='text-[#FF1111]'>Popular</span>
//                                 </button>
//                             </div>
//                             <div className='flex flex-col gap-2'>
//                                 <h3 className='text-col-text-2'>$ 5,970</h3>
//                                 <h4 className='text-col-text-2'>Tranquil Haven in the Woods</h4>
//                                 <span className='text-col-text-3'>103 Wright CourtBurien, WA 98168</span>
//                                 <div className='flex gap-6 items-center'>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBed} alt="" />
//                                         <span>4 Beds</span>
//                                     </div>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBath} alt="" />
//                                         <span>3 Bath</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex flex-col gap-4'>
//                             <div className='relative'>
//                                 <img
//                                     // src={Room1}
//                                     src={SliderCheckImg2}
//                                     alt="Room 1"
//                                     className="w-[320px] h-[320px] rounded-[30px] object-cover "
//                                 />
//                                 <button className='px-4 py-2 bg-[#D7EEFF] rounded-[16px] absolute bottom-[20px] left-[20px] flex items-center gap-3'>
//                                     <img className='w-5 h-5' src={IconHome}/>
//                                     <span className='text-[#119BFF]'>New Listing</span>
//                                 </button>
//                             </div>
//                             <div className='flex flex-col gap-2'>
//                                 <h3 className='text-col-text-2'>$ 1,970</h3>
//                                 <h4 className='text-col-text-2'>Serene Retreat by the Lake</h4>
//                                 <span className='text-col-text-3'>1964 Jehovah Drive, VA 22408</span>
//                                 <div className='flex gap-6 items-center'>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBed} alt="" />
//                                         <span>3 Beds</span>
//                                     </div>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBath} alt="" />
//                                         <span>2 Bath</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex flex-col gap-4'>
//                             <div className='relative'>
//                                 <img
//                                     // src={Room1}
//                                     src={SliderCheckImg3}
//                                     alt="Room 1"
//                                     className="w-[320px] h-[320px] rounded-[30px] object-cover "
//                                 />
//                                 <button className='px-4 py-2 bg-[#F1FFF1] rounded-[16px] absolute bottom-[20px] left-[20px] flex items-center gap-3'>
//                                     <img className='w-5 h-5' src={IconDolar}/>
//                                     <span className='text-[#00CE3A]'>Discounted Price</span>
//                                 </button>
//                             </div>
//                             <div className='flex flex-col gap-2'>
//                                 <h3 className='text-col-text-2'>$ 3,450</h3>
//                                 <h4 className='text-col-text-2'>Charming Cottage in the Meadow</h4>
//                                 <span className='text-col-text-3'>1508 Centennial Farm RoadHarlan, 51537</span>
//                                 <div className='flex gap-6 items-center'>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBed} alt="" />
//                                         <span>4 Beds</span>
//                                     </div>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBath} alt="" />
//                                         <span>4 Bath</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex flex-col gap-4'>
//                             <div className='relative'>
//                                 <img
//                                     // src={Room1}
//                                     src={SliderCheckImg4}
//                                     alt="Room 1"
//                                     className="w-[320px] h-[320px] rounded-[30px] object-cover "
//                                 />
//                                  <button className='px-4 py-2 rounded-[16px] absolute bg-[#FFE1E1] bottom-[20px] left-[20px] flex items-center gap-3'>
//                                     <img className='w-5 h-5' src={IconFire}/>
//                                     <span className='text-[#FF1111]'>Popular</span>
//                                 </button>
//                             </div>
//                             <div className='flex flex-col gap-2'>
//                                 <h3 className='text-col-text-2'>$ 2,389</h3>
//                                 <h4 className='text-col-text-2'>Grand Estate on the Hilltop</h4>
//                                 <span className='text-col-text-3'>103 Wright CourtBurien, WA 98168</span>
//                                 <div className='flex gap-6 items-center'>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBed} alt="" />
//                                         <span>4 Beds</span>
//                                     </div>
//                                     <div className='flex gap-2 items-center'>
//                                         <img className='w-6 h-6' src={IconBath} alt="" />
//                                         <span>4 Bath</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </div>
//     )
// }

// export default CheckOutNew













import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SliderCheckImg1 from "../assets/slider_check1.jpg";
import SliderCheckImg2 from "../assets/slider_check2.jpg";
import SliderCheckImg3 from "../assets/slider_check3.jpg";
import SliderCheckImg4 from "../assets/slider_check4.jpg";
import IconBath from "../assets/icon_bath.svg";
import IconBed from "../assets/icon_bed.svg";
import IconFire from "../assets/icon_fire.svg";
import IconDolar from "../assets/icon_dolar.svg";
import IconHome from "../assets/icon_home.svg";

const CheckOutNew = () => {
    // Swiper görünürlüğü için ekran genişliğine bağlı bir state kullanılır
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1280);

    // Ekran boyutunu kontrol eden bir fonksiyon
    React.useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Slider içeriği
    const sliderContent = [
        {
            id: 1,
            image: SliderCheckImg1,
            price: "$5,970",
            title: "Tranquil Haven in the Woods",
            location: "103 Wright Court, Burien, WA 98168",
            beds: "4 Beds",
            baths: "3 Bath",
            badge: "Popular",
            badgeColor: "bg-[#FFE1E1]",
            badgeTextColor: "text-[#FF1111]",
            icon: IconFire,
        },
        {
            id: 2,
            image: SliderCheckImg2,
            price: "$1,970",
            title: "Serene Retreat by the Lake",
            location: "1964 Jehovah Drive, VA 22408",
            beds: "3 Beds",
            baths: "2 Bath",
            badge: "New Listing",
            badgeColor: "bg-[#D7EEFF]",
            badgeTextColor: "text-[#119BFF]",
            icon: IconHome,
        },
        {
            id: 3,
            image: SliderCheckImg3,
            price: "$3,450",
            title: "Charming Cottage in the Meadow",
            location: "1508 Centennial Farm Road, Harlan, 51537",
            beds: "4 Beds",
            baths: "4 Bath",
            badge: "Discounted Price",
            badgeColor: "bg-[#F1FFF1]",
            badgeTextColor: "text-[#00CE3A]",
            icon: IconDolar,
        },
        {
            id: 4,
            image: SliderCheckImg4,
            price: "$2,389",
            title: "Grand Estate on the Hilltop",
            location: "103 Wright Court, Burien, WA 98168",
            beds: "4 Beds",
            baths: "4 Bath",
            badge: "Popular",
            badgeColor: "bg-[#FFE1E1]",
            badgeTextColor: "text-[#FF1111]",
            icon: IconFire,
        },
    ];

    return (
        <div className='pb-[160px]'>
            <div className='flex items-center justify-between flex-col xl:flex-row mb-12'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-sub-color1'>CHECKOUT OUR NEW</h4>
                    <h2 className='text-[36px] xl:40px'>Latest Listed Properties</h2>
                    <p className='text-col-text-3 pb-4'>
                        Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
                        <br /> nec dignissim purus.
                    </p>
                </div>
                <div className='flex gap-4 text-white'>
                    <button className='text-sub-color1 border-2 border-primary-color rounded-[30px] px-6 py-3 xl:px-8 xl:py-3'>
                        All
                    </button>
                    <button className='bg-primary-color rounded-[30px] px-6 xl:px-8 xl:py-3'>Sell</button>
                    <button className='text-sub-color1 border-2 border-primary-color rounded-[30px] px-6 xl:px-8 xl:py-3'>
                        Rent
                    </button>
                </div>
            </div>
            <div>
                {isDesktop ? (
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        speed={1000}
                        loop={true}
                        className="rounded-2xl"
                    >
                        {sliderContent.map((item) => (
                            <SwiperSlide key={item.id}>
                                <PropertyCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="flex flex-col gap-8">
                        {sliderContent.map((item) => (
                            <PropertyCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// Kart bileşeni
const PropertyCard = ({ item }) => (
    <div className='flex flex-col gap-4'>
        <div className='relative'>
            <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[320px] h-[320px] rounded-[30px] object-cover"
            />
            <button
                className={`px-4 py-2 rounded-[16px] absolute ${item.badgeColor} bottom-[20px] left-[20px] flex items-center gap-3`}
            >
                <img className='w-5 h-5' src={item.icon} alt="Badge Icon" />
                <span className={item.badgeTextColor}>{item.badge}</span>
            </button>
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-col-text-2'>{item.price}</h3>
            <h4 className='text-col-text-2'>{item.title}</h4>
            <span className='text-col-text-3'>{item.location}</span>
            <div className='flex gap-6 items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='w-6 h-6' src={IconBed} alt="Bed Icon" />
                    <span>{item.beds}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-6 h-6' src={IconBath} alt="Bath Icon" />
                    <span>{item.baths}</span>
                </div>
            </div>
        </div>
    </div>
);

export default CheckOutNew;
