import React from 'react'
import  Lottie  from 'lottie-react';
import whatsappData from './Animation.json'


function Landing() {
  return (
<div className=''>
     
<div className="">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/company-intro.mp4" // Add your video source here
        autoPlay
        loop
        muted
        playsInline
      />  
      </div>

      <div className="absolute gap-[10px] text-center inset-0 flex flex-col items-center justify-center">
    <h1 className= 'font-rubik leading-tight text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] uppercase font-bold text-white  z-10'>
      Empowering Brands in the Digital Age
    </h1>
    <h3 className='font-rubik z-10 text-[1.2rem] md:text-[2rem] font-semibold text-[#FFFF00]'>
      Boost Your Bussiness With Us
    </h3> 
  </div>
{/* 
  <div className='fixed right-0 bottom-14 z-30 '>
            <a href="https://wa.me/message/CGH2XPVBAWLLJ1"
                target="_blank" 
                rel="noopener noreferrer"
            >

        <Lottie
        animationData={whatsappData} 
        loop={true} // Set to false if you want it to play only once
        autoplay={true} // Set to false if you want to control playback
        style={{ width: 80, height: 80 }} // Adjust size as needed
        />
        </a>
    </div> */}

</div>
  )
}

export default Landing
