import React from 'react'
import MailIcon from '../assets/icon_mail.svg';
import PhoneIcon from '../assets/icon_phone.svg'; 
import PinIcon from '../assets/icon_pin.svg';
const Header = () => {
    return (
        <div className='hidden lg:flex h-12 bg-primary-color justify-between pl-[6rem] pr-[8rem] py-4 text-white text-xs'>
            <div className='flex gap-1'>
                <img className='w-4 h-4' src={PinIcon} alt="" />
                <span>Lorem Ipsum has been the industry's standard dummy</span>
            </div>
            <div className='flex gap-10'>
                <div className='flex gap-1'>
                    <img className='w-4 h-4' src={PhoneIcon} alt="" />
                    <span>+90123 45 67</span>
                </div>
                <div className='flex gap-1'>
                    <img className='w-4 h-4' src={MailIcon} alt="" />
                    <span>mail@mail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Header