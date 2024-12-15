// import React from 'react'
// import PurpleIcon1 from "../assets/icon_purple1.svg"
// import PurpleIcon2 from "../assets/icon_purple2.svg"
// import ImageWhoAreWe1 from "../assets/image_whoarewe_1.jpg"
// import ImageWhoAreWe2 from "../assets/image_whoarewe_2.jpg"
// import ImageWhoAreWe3 from "../assets/image_whoarewe_3.jpg"


// const WhoAreWe = () => {
//     return (
//         <div className='mt-12 mb-[200px]'>
//             <h4 className='text-sub-color1 pb-8'>WHO ARE WE</h4>
//             <div className='flex'>
//                 <div className='flex w-1/2 flex-col gap-8 items-start'>
//                     <h2>Assisting inviduals in <br />locating the appropriate <br />real estate.</h2>
//                     <p>Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it </p>
//                     <div className='shadow-custom rounded-[28px] flex items-center gap-8 px-10 py-6'>
//                         <img className='w-10 h-10' src={PurpleIcon1} alt="" />
//                         <div>
//                             <h4 className='text-sub-color1'>Lorem ipsum has been the</h4>
//                             <p className='text-col-text-3'>when an unknown printer took a <br /> galley</p>
//                         </div>
//                     </div>
//                     <div className='shadow-custom rounded-[28px] flex items-center gap-8 px-10 py-6'>
//                         <img className='w-10 h-10' src={PurpleIcon2} alt="" />
//                         <div>
//                             <h4 className='text-sub-color1'>Lorem ipsum has been the</h4>
//                             <p className='text-col-text-3'>when an unknown printer took a <br /> galley</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1/2 flex gap-4'>
//                     <div className='w-1/2'>
//                         <img className='rounded-[28px] mt-12 h-[500px] object-cover' src={ImageWhoAreWe1} alt="" />
//                     </div>
//                     <div className='flex w-1/2 flex-col gap-4 mb-16'>
//                         <img className='rounded-[28px] object-cover' src={ImageWhoAreWe2} alt="" />
//                         <img className='rounded-[28px] object-cover' src={ImageWhoAreWe3} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WhoAreWe







import React from 'react'
import PurpleIcon1 from "../assets/icon_purple1.svg"
import PurpleIcon2 from "../assets/icon_purple2.svg"
import ImageWhoAreWe1 from "../assets/image_whoarewe_1.jpg"
import ImageWhoAreWe2 from "../assets/image_whoarewe_2.jpg"
import ImageWhoAreWe3 from "../assets/image_whoarewe_3.jpg"

const WhoAreWe = () => {
    return (
        <div className='mt-12 mb-24 xl:mb-[200px]'>
            <h4 className='text-sub-color1 pb-8'>WHO ARE WE</h4>
            <div className='flex flex-col xl:flex-row'>
                <div className='flex w-full xl:w-1/2 flex-col gap-8 xl:items-start'>
                    <h2 >Assisting individuals in <br />locating the appropriate <br />real estate.</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text <br className="hidden xl:block" /> ever since the 1500s, when an unknown printer took a galley of <br className="hidden xl:block" /> type and scrambled it </p>
                    <div className='shadow-custom rounded-[28px] flex items-center gap-4 xl:gap-8 px-6 xl:px-10 py-4 xl:py-6'>
                        <img className='w-8 h-8 xl:w-10 xl:h-10' src={PurpleIcon1} alt="" />
                        <div>
                            <h4 className='text-sub-color1'>Lorem ipsum has been the</h4>
                            <p className='text-col-text-3'>when an unknown printer took a <br className="hidden xl:block" /> galley</p>
                        </div>
                    </div>
                    <div className='shadow-custom rounded-[28px] flex items-center gap-4 xl:gap-8 px-6 xl:px-10 py-4 xl:py-6'>
                        <img className='w-8 h-8 xl:w-10 xl:h-10' src={PurpleIcon2} alt="" />
                        <div>
                            <h4 className='text-sub-color1'>Lorem ipsum has been the</h4>
                            <p className='text-col-text-3'>when an unknown printer took a <br className="hidden xl:block" /> galley</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full xl:w-1/2 gap-4 mt-8 xl:mt-0'>
                    <div className='w-1/2'>
                        <img className='rounded-[28px] mt-4 xl:mt-12 h-[250px] xl:h-[500px] object-cover' src={ImageWhoAreWe1} alt="" />
                    </div>
                    <div className='flex w-1/2 flex-col gap-4'>
                        <img className='rounded-[28px] object-cover h-[120px] xl:h-auto' src={ImageWhoAreWe2} alt="" />
                        <img className='rounded-[28px] object-cover h-[120px] xl:h-auto' src={ImageWhoAreWe3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAreWe
