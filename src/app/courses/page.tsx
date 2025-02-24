"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from "@/components/courses-navbar";
import Footer from "@/components/footer";
import Image from 'next/image';
import SeoMastery from '/public/images/seo-mastery.jpg'

export default function Courses() {

    const [email, setEmail] = useState('');
    const [notify, setNotify] = useState(false);
  
    const handleNotify = () => {
      if (email) {
        setNotify(true);
        // You can add logic here to send email data to a backend or API.
      }
    };

  return (
    <div
    className="
      overflow-clip mt-[6rem]
inset-0
-z-10 h-full w-full bg-[#fafafa]
bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
 bg-[size:14px_24px]"
  >
      <Navbar/>
      <div className="flex flex-col md:flex-row items-center justify-center mt-[10rem]  px-8 bg-gray-100">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-lg text-[#FF0000] font-semibold">Coming Soon</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-black">SEO Mastery</h1>
        <p className="text-xl md:text-2xl text-gray-700">
          Unlock the secret of SEO mastery
        </p>
        
        <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md text-lg focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleNotify}
            className="px-6 py-2 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700"
          >
            Notify Me
          </button>
        </div>
        {notify && (
          <p className="mt-2 text-green-600">You have been successfully added to the notification list!</p>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src={SeoMastery} // Add your image path here
          alt="SEO Mastery"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <Footer/>
    </div>
  )
}