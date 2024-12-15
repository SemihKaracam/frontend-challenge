// import React from 'react'
// import HouseIcon from '../assets/icon_house.svg';
// import UserIcon from '../assets/icon_user.svg';

// const Navbar = () => {
//     return (
//         <div className='w-100 px-[100px] py-5 flex items-center justify-between'>
//             <nav>
//                 <ul class="flex gap-2">
//                     <li className='py-2 px-4 bg-primary-color rounded-[2rem] bg-opacity-30 hover:bg-primary-color hover:bg-opacity-30'><a href="#">Home</a></li>
//                     <li className='py-2 px-4 hover:rounded-[1.5rem] hover:bg-primary-color hover:bg-opacity-10'><a href="#">About</a></li>
//                     <li className='py-2 px-4 hover:rounded-[1.5rem] hover:bg-primary-color hover:bg-opacity-10'><a href="#">Services</a></li>
//                     <li className='py-2 px-4 hover:rounded-[1.5rem] hover:bg-primary-color hover:bg-opacity-10'><a href="#">Contact</a></li>
//                 </ul>
//             </nav>
//             <div className='flex items-center gap-2'>
//                 <div className='w-12 h-12 flex justify-center items-center bg-primary-color rounded-[50%]'>
//                     <img className='w-5 h-5' src={HouseIcon} alt="" />
//                 </div>
//                 <span>Logo</span>
//             </div>
//             <div className='flex gap-6'>
//                 <button className='flex justify-center items-center gap-2 hover:bg-primary-color hover:bg-opacity-30 w-40 h-14 py-4 px-4 rounded-[3rem]'>
//                     <img className='w-5 h-5' src={UserIcon} alt="" />
//                     <span>Login/Register</span>
//                 </button>
//                 <button className='flex items-center justify-center gap-2 bg-primary-color w-40 h-14 text-white py-4 px-4 rounded-[3rem]'>
//                     <img className='w-5 h-5' src={HouseIcon} alt="" />
//                     <span>Add Listing</span>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Navbar








import React, { useState, useEffect } from 'react';
import HouseIcon from '../assets/icon_house.svg';
import UserIcon from '../assets/icon_user.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hamburger Menüyü Aç/Kapat
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Ekran boyutu değiştiğinde menüyü kapat
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false); // Ekran genişledikçe menüyü kapat
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup işlemi
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-100 px-10 md:px-20 py-5 flex items-center justify-between relative'>
            {/* Hamburger Menu - Sağ Üstte */}
            <div className="lg:hidden absolute right-10">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    {/* Hamburger Icon */}
                    <div className="flex flex-col gap-1 px-4 py-6">
                        <span className="block w-8 h-1 bg-black rounded"></span>
                        <span className="block w-8 h-1 bg-black rounded"></span>
                        <span className="block w-8 h-1 bg-black rounded"></span>
                    </div>
                </button>
            </div>

            {/* Navigation - Responsive */}
            <nav className={`py-10 lg:flex gap-2 ${isMenuOpen ? 'flex' : 'hidden'} px-[40px] flex-col lg:flex-row absolute lg:static top-20 left-0 right-0 bg-white shadow-md lg:bg-transparent lg:shadow-none z-10`}>
                <ul className="flex flex-col lg:flex-row gap-2">
                    <li className='cursor-pointer py-2 px-4 bg-primary-color rounded-[2rem] bg-opacity-30 hover:bg-primary-color hover:bg-opacity-30'><a href="#">Home</a></li>
                    <li className='cursor-pointer py-2 px-4 hover:rounded-[1.5rem] hover:bg-primary-color hover:bg-opacity-10'><a href="#">About</a></li>
                    <li className='cursor-pointer py-2 px-4 hover:rounded-[1.5rem] hover:bg-primary-color hover:bg-opacity-10'><a href="#">Services</a></li>
                    <li className='cursor-pointer py-2 px-4 hover:rounded-[1.5rem] hover:bg-primary-color hover:bg-opacity-10'><a href="#">Contact</a></li>
                </ul>

                {/* Buttons - Küçük Ekranlarda Hamburger Menüsüne Taşındı */}
                <div className={`flex gap-6 lg:flex-row ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <button className='flex justify-center items-center gap-2 text-white bg-sub-color1 hover:bg-primary-color hover:bg-opacity-30 w-40 h-14 py-4 px-4 rounded-[3rem]'>
                        <img className='w-5 h-5' src={UserIcon} alt="" />
                        <span>Login/Register</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 bg-primary-color w-40 h-14 text-white py-4 px-4 rounded-[3rem]'>
                        <img className='w-5 h-5' src={HouseIcon} alt="" />
                        <span>Add Listing</span>
                    </button>
                </div>
            </nav>

            {/* Logo Section - Sol Üstte */}
            <div className='flex items-center gap-2'>
                <div className='w-12 h-12 flex justify-center items-center bg-primary-color rounded-[50%]'>
                    <img className='w-5 h-5' src={HouseIcon} alt="" />
                </div>
                <span>Logo</span>
            </div>

            {/* Butonlar - Büyük Ekranlarda Görünür */}
            <div className='lg:flex gap-6 hidden'>
                <button className='flex justify-center items-center gap-2 hover:bg-primary-color hover:bg-opacity-30 w-40 h-14 py-4 px-4 rounded-[3rem]'>
                    <img className='w-5 h-5' src={UserIcon} alt="" />
                    <span>Login/Register</span>
                </button>
                <button className='flex items-center justify-center gap-2 bg-primary-color w-40 h-14 text-white py-4 px-4 rounded-[3rem]'>
                    <img className='w-5 h-5' src={HouseIcon} alt="" />
                    <span>Add Listing</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
