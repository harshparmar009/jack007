'use client'

import React from 'react'
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import jackLogo from '../../public/logo/logo-company.png';

function Navbar() {

  const phoneNumber = '+917791819490'; // Replace with your desired phone number

  const makeCall = () => {
      window.location.href = `tel:${phoneNumber}`;
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=''>

      <Element
        name="top"
        className="overflow-hidden fixed top-0 right-0 left-0 z-50  
    bg-black"
      >
        <div className='overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%]  flex items-center 
   justify-between py-1 px-4 md:px-8 mx-6'>

        <Link href={"/"}>
          <Image
            src={jackLogo}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28 rounded-2xl hidden md:flex"
            
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-white font-medium text-lg cursor-pointer">
            <Link href={"/"} className="hover:text-[#30D866]">
              Home
            </Link>

            <Link href={"./showcase"} className="hover:text-[#30D866]">
              Projects
            </Link>
            
            <Link href={"./about"} className="hover:text-[#30D866]" >
              About Us
            </Link>

          </div>
        </div>

        <div className="flex items-center pl-[3rem]">
          <a href="tel:+917791819490" className="hidden lg:flex">
            <button className="py-2 mr-[10px] rounded-md flex items-center text-white">
            +91 7791819490
            </button>
          </a>

          <Link
            href={"./courses"}
            className="
            py-3 
            px-6
            text-lg 
            hover:bg-[#30D866]
            rounded-[6px]
            border-2
            border-black
            text-black
            hover:text-black
            bg-white
            transition
            duration-200
            hidden md:block
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
              dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),
              4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Courses
          </Link>
    
        </div>
    </div>


<div className='flex items-center justify-between block md:hidden '>
      <div>
      <div className={`md:hidden  flex ${showMenu === true ? 'bg-black w-full h-full fixed left-0 top-0 pt-[3rem] flex flex-col' : null } `}>
      <button
          onClick={() => setShowMenu(!showMenu)}
          className=" pl-[2rem] font-bold text-[3rem] md:hover:text-gray-500 text-white"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        
    {showMenu && (
        <div className='flex flex-col gap-[4rem] overflow-y-scroll'>
          <div className='text-white flex flex-col gap-[2rem] text-[1.7rem] ml-[2rem] mt-[2rem] ' >
           
           <Link href={"/"} className="hover:text-[#30D866]">
              Home
            </Link>
           
           <Link href={"./showcase"} className="hover:text-[#30D866]">
              Projects
            </Link>

            <Link href={"./about"} className="hover:text-[#30D866]" >
              About Us
            </Link>
           


          </div>

            
            <div className=' flex flex-col items-center pt-[2rem] border-t-2 border-gray w-screen'>
              <h1 className='text-[2rem] text-white' >Contacts Us</h1>
              <div className=' text-[1.7rem] text-white flex flex-col items-center gap-[10px] justify-center text-xl'>
                <div className='mt-[15px]'>
                <span>mail@jackinfosoft.com</span>
                </div>
                <div>
                <Link href={"./privacy_policy"} className="pr-[20px] hover:text-blue-500" >
              Privacy Policy
            </Link>

            
            <Link href={"./refund_policy"} className="hover:text-blue-500" >
              Refund Policy
            </Link>
                </div>
              </div>
            </div>
           

          </div>
          
        )} 
      </div>
      </div>
          <Link href={"/"}>
          <Image
            src={"/logo/4.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28 rounded-2xl"
            
          />
        </Link>

          <Link 
          href={"/meeting"}>
          <Image
            src={"/icons/call-logo.svg"}
            width={1000}
            alt="CALL-LOGO"
            height={1000}
            className="w-[5rem] pr-[2rem]"
          />

          </Link>
  </div>

   </Element>   
         
    </div>
    
  )


}

export default Navbar
