import React from 'react'
import MailIcon from '../assets/icon_mail_black.svg';
import PhoneIcon from '../assets/icon_phone_black.svg';
import HouseIcon from '../assets/icon_house.svg';
import FbIcon from '../assets/icon_facebook.svg';
import IgIcon from '../assets/icon_instagram.svg';
import LnIcon from '../assets/icon_linkedin.svg';
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row xl:justify-between mt-[80px] px-20 xl:px-40 py-[100px] text-col-text-2 bg-sub-color1 bg-opacity-[10%]'>
                <div className='flex flex-col xl:flex-col gap-6'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-12 h-12 flex items-center justify-center bg-primary-color rounded-[50%]'>
                            <img className='w-6 h-6' src={HouseIcon} alt="" />
                        </div>
                        <h4>Rezilla</h4>
                    </div>
                    <p>Lorem ipsum has been the industry <br className='hidden xl:inline'/> standard dummy text</p>
                    <div className='flex items-center gap-3'>
                        <img className='h-5 w-5' src={PhoneIcon} alt="" />
                        <h5>+90123 45 67</h5>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <img className='h-5 w-5' src={MailIcon} alt="" />
                        <h5>mail@mail.com</h5>
                    </div>
                </div>
                <div className='hidden xl:block'>
                    <h4 className='pb-6'>Quick Links</h4>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Listings</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Become a Agent</a></li>
                    </ul>
                </div>
                <div className='hidden xl:flex xl:flex-col xl:gap-2'>
                    <h4 className='pb-4'>Discovery</h4>
                    <span>Canada</span>
                    <span>United States</span>
                    <span>Germany</span>
                    <span>Africa</span>
                    <span>India</span>
                </div>
                <div className='flex flex-col gap-5'>
                    <h4>Subscribe to our <br className='hidden xl:inline'/> Newsletter!</h4>
                    <div className='w-[240px] xl:w-[300px] bg-white rounded-[24px] relative py-2'>
                        <input className='w-full h-full px-4 py-3 rounded-[24px]' placeholder='Email Address' type="text" />
                        <div className='absolute cursor-pointer right-1 top-2 bg-primary-color w-[48px] h-[48px] rounded-[50%] flex items-center justify-center'>
                            <FaArrowRightLong size={20} color='white' />
                        </div>
                    </div>
                    <h4>Follow Us on</h4>
                    <div className='flex items-center gap-5'>
                        <a target="_blank" href="https://www.linkedin.com">
                            <img src={LnIcon} />
                        </a>
                        <a target="_blank" href="https://www.facebook.com">
                            <img src={FbIcon} />
                        </a>
                        <a target="_blank" href="https://www.instagram.com">
                            <img src={IgIcon} />
                        </a>
                    </div>

                </div>
            </div>
            <div className='flex justify-between items-center text-col-text-4 bg-col-text-1 py-5 px-40'>
                <div>
                    <span>© Company – All rights reserved</span>
                </div>
                <div className='hidden xl:flex  gap-6 items-center'>
                    <span>Terms and Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Disclaimer</span>
                </div>

            </div>
        </div>
    )
}

export default Footer