"use client";

import React, { useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import jackLogo from "../../../public/logo/4.png";
import Lottie from "lottie-react";
import whatsappData from './Animation.json'

function Navbar() {
  // const phoneNumber = "+917791819490"; // Replace with your desired phone number

  // const makeCall = () => {
  //   window.location.href = `tel:${phoneNumber}`;
  // };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (!isClient) return; // Prevents running in SSR

    const phoneNumber = "917791819490"; // Remove the "+" for WhatsApp API
    const message = encodeURIComponent("Hello, I'm interested in your courses!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };


  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <Element
        name="top"
        className="overflow-hidden fixed top-0 w-full  z-50 
    bg-black py-[5px]"
      >
        <div
          className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-transparent flex items-center 
   justify-between py-1 px-4 md:px-8 mx-6"
        >
          <Link href={"/"}>
          <div className="w-[50px] h-[50px] hidden md:flex" >
           <Image
              src={jackLogo}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-2xl"
              />
              </div>
          </Link>

          <div className="absolute right-1/2 translate-x-1/2 transform">
            <div className="hidden md:flex gap-x-10 items-center text-[#fafafa] font-medium text-md cursor-pointer">
              <Link href={"./showcase"} className="hover:text-[#30D866]">
                Projects
              </Link>

              <Link href={"./meeting"} className="hover:text-[#30D866]">
                Meeting
              </Link>

              <ScrollLink
                to="services"
                smooth={true}
                // href={'/'}
                className="hover:text-[#30D866]"
              >
                Services
              </ScrollLink>

              <ScrollLink
                to="guarentees"
                smooth={true}
                // href={'/'}
                className="hover:text-[#30D866]"
              >
                Guarentees
              </ScrollLink>
            </div>
          </div>

          <div className="flex items-center pl-[3rem]">
            <a href="tel:+917791819490" className="hidden lg:flex">
              <button className="py-2 lg:text-[13px]  mr-[10px] rounded-md flex items-center text-white">
                +91 7791819490
              </button>
            </a>

            <Link
              href={"./courses"}
              className="
            py-2 
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

        <div className="flex items-center justify-between block md:hidden ">
          <div>
            <div
              className={`md:hidden  flex ${
                showMenu === true
                  ? "bg-black w-full h-full fixed left-0 top-0 pt-[3rem] flex flex-col"
                  : null
              } `}
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className=" pl-[2rem] font-bold text-[2rem] text-white"
              >
                {showMenu ? <GrClose /> : <GiHamburgerMenu />}
              </button>

              {showMenu && (
                <div className="flex flex-col overflow-y-scroll overflow-x-hidden gap-[4rem]">
                  <div className="text-white flex flex-col gap-[2rem] text-[1.5rem] ml-[2rem] mt-[2rem]">
                    <Link href={"./showcase"} >
                      Projects
                    </Link>

                    <Link href={"./courses"} >
                      Courses
                    </Link>

                    <ScrollLink
                      to="services"
                      smooth={true}
                      // href={'/'}
                      className='cursor-pointer'
                      onClick={toggleMenu}
                    >
                      Services
                    </ScrollLink>

                    <ScrollLink
                      to="process"
                      smooth={true}
                      // href={'/'}
                      className='cursor-pointer'
                      onClick={toggleMenu}
                    >
                      Process
                    </ScrollLink>

                    <ScrollLink
                      to="guarentees"
                      smooth={true}
                      // href={'/'}
                      className='cursor-pointer'
                      onClick={toggleMenu}
                    >
                      Guarentees
                    </ScrollLink>

                    <Link href={"./about"} >
                      About Us
                    </Link>
                  </div>

                  <div className=" flex flex-col items-center pt-[2rem] pb-[4rem] border-t-2 border-gray w-screen">
                    <h1 className="text-[2rem] text-white">Contacts Us</h1>
                    <div className=" text-[1.7rem] text-white flex flex-col items-center gap-[10px] justify-center text-xl">
                      <div className="mt-[15px]">
                        <span>mail@jackinfosoft.com</span>
                      </div>
                      <div className='flex items-center flex-col'>
                        <Link
                          href={"./privacy_policy"}
                          className="pr-[20px] hover:text-blue-500"
                        >
                          Privacy Policy
                        </Link>

                        <Link
                          href={"./refund_policy"}
                          className="hover:text-blue-500"
                        >
                          Refund Policy
                        </Link>

                        <Link href={"./T&C"} className="hover:text-blue-500">
                          T&C
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Link href={"/"}>
          <div className="w-[50px] h-[50px]">
            <Image
              src={"/logo/4.png"}
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-2xl"
            />

          </div>
          </Link>

          <Link href={"/meeting"}>
          <div className="w-[40px] h-[40px] mr-[2rem] ">
            <Image
              src={"/icons/call-logo.svg"}
              width={100}
              alt="CALL-LOGO"
              height={100}
              className="w-full h-full object-cover"
              />
            </div>
          </Link>

        </div>

        {/* <button
          className="flex items-center justify-center w-full py-4 bg-blue-600 text-white font-bold text-lg fixed bottom-0 left-0 "
          onClick={makeCall}
        >
          Request Call
        </button> */}

      </Element>

      <div className='z-50 fixed bottom-[5px] right-[5px]'>
        <button onClick={handleWhatsAppClick} >
         <Lottie animationData={whatsappData} loop={true}  style={{ width: 80, height: 80 }} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;