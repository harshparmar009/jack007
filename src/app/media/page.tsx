import Navbar from "@/components/media-navbar"
import Footer from "@/components/pages/Footer"
import { Newspaper, Camera, Users, BookOpen, Car, Tv, Radio, Monitor, Plane } from 'lucide-react'
import Image from "next/image"


const mediaQuery = () => {
    const offerings = [
        { icon: Plane, title: "Celebrities" },
        { icon: Users, title: "Influancer" },
        { icon: Users, title: "Instagram Active User" },
        { icon: Newspaper, title: "News Blogs Ad" },
        { icon: Monitor, title: "TV Show Ad" },
        { icon: Newspaper, title: "News Paper Ad" },
        { icon: Monitor, title: "Conoma Location Ad" },
        { icon: Monitor, title: "Digital Channel Ad" },
        { icon: Tv, title: "Bill Board Ad" },
        { icon: Users, title: "Member Group Ad" },
        { icon: Radio, title: "Podcast & Interview Ad" },
      ]
    return(
        <>
        <Navbar/>
        <div className="w-full bg-white pt-[10rem]">
            <div className="max-w-7xl flex flex-col gap-4 items-center justify-center mx-auto">
              <div className="text-4xl text-left w-full my-6">Celebreties Advertising</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-4 md-px-0">
              {offerings.map((offering) => (
            <div
              key={offering.title}
              className="bg-gray-50 rounded-lg text-center transition-all duration-300 hover:shadow-xl 
              hover:-translate-y-1 hover:bg-white"
            >
              <div className="rounded-t-lg mb-4">
                {/* <offering.icon className="h-10 w-10 " /> */}
                {/* <div className="fixed top-0 rounded-t-lg bg-black"></div> */}
                <Image
                src={"/images/business.webp"}
                width={100}
                height={100}
                className="w-full rounded-t-lg"
                alt="image"
              />
              </div>
              {/* <h3 className="text-lg font-semibold">{offering.title}</h3> */}
              <div className="flex items-center p-2 w-full justify-between flex-col">
                <div className="w-full text-left mb-3 px-4 gap-2 md:px-0">
                    <h2 className="text-sm font-semibold">{offering.title}</h2>
                    <p className="text-sm">It is the most</p>
                    <h3 className="text-sm text-gray-500">On Request</h3>
                </div>
                <button className="w-full bg-yellow-500 rounded-full text-black mx-4">Click to View</button>
              </div>
            </div>
          ))}
              </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default mediaQuery