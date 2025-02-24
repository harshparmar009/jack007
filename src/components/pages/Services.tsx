import React from 'react'
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import { Element } from "react-scroll";
import Image from 'next/image';


const services = [
    { 
      icon: "/images/s_6.png",
      title: "Web Design + Development",
      description:
        "Take your business to the next level with our web design and development services",
    },
    {
      icon: "/images/s_1.png",
      title: "Search Engine Optimization",
      description:
        "Get your website to the top of search engine results with our SEO services",
    },
    {
      icon: "/images/s_5.png",
      title: "Content Creation",
      description:
        "Boost your brand's online presence with our social media marketing services",
    },
    {
      icon: "/images/s_3.png",
      title: "Social Media Marketing",
      description:
        "Interact with your customers and increase sales with our email marketing services",
    },
    {
      icon: "/images/s_4.png",
      title: "Email Marketing",
      description:
        "With our content creation services, we help businesses drive results",
    },
    {
      icon: "/images/s_2.png",
      title: "Pay-Per-Click Advertising",
      description:
        "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
    },
  ];

function Services() {
  return (
    <div>
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
        <h1 className='w-full flex items-center justify-center'>
          <WordPullUpDemo />
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your business stand out 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-6 ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-white rounded-lg p-6  lg:px-8 space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-5xl">
       
        <div className="text-center lg:text-left">
          <h2 className="text-xl font-bold text-gray-800 mb-4">All Services</h2>
          <p className="text-gray-600 text-lg">
            Get access to all our services for same price!
          </p>
        </div>
       
        <div className="flex justify-center items-center bg-gray-100 text-gray-800 font-semibold text-xl md:text-2xl py-4 px-6 rounded-lg border border-gray-200">
          ₹5999/-
        </div>
      </div>
    </div>

      </Element>
    </div>
  )
}

export default Services
