import React from "react";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { PiCheckBold } from "react-icons/pi";
import Link from "next/link";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
// import introModel from "../../../public/images/introModel.png";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
// import offerLogo from '../../../public/images/16284.jpg'
import mainLogo from '../../../public/logo/4.png'

function HeroSection() {
  const offerings = [
    { img: "/images/1.png", title: "Digital Marketing" },
    { img: "/images/2.png", title: "A.I." },
    { img: "/images/3.png", title: "News Channel ADs" },
    { img: "/images/4.png", title: "Movie Ads" },
    { img: "/images/5.png", title: "Advance Seo" },
    { img: "/images/6.png", title: "Content Ads" },
    { img: "/images/7.png", title: "Web/App Devs" },
    { img: "/images/8.png", title: "PPC Ad" },
    { img: "/images/9.png", title: "E-Mail Marketing" },
    { img: "/images/10.png", title: "Digital Marketing" },
    // { img: "/images/01.png", title: "Podcast & Interview Ad" },
  ];

  return (
    <div className="relative mb-6">
      <section className="hoverable banner w-full h-full overflow-hidden">
        {/* <Background/> */}
        <div className="md:pb-28 pb-[70px] mb-4  z-20">
          <div className="flex flex-col-reverse items-center md:flex-row justify-between px-12 md:px-32">
            <div className="flex flex-col justify-center items-center ">
              <div className="relative mt-8 ">
                <h4
                  className="animate-fade-right opacity-90 cursor-scale text-[15px] 
                xs:text-2xl sm:text-xl lg:text-2xl font-bold text-center tracking-wide word leading-tight mb-2 sm:mb-3 md:mb-2"
                >
                  Gujarat <span className="text-red-600">#1</span>
                </h4>
                <h1
                  className="font-poppins animate-fade-right cursor-scale text-4xl xs:text-4xl 
                sm:text-5xl lg:text-6xl font-bold text-center tracking-wide word leading-tight mb-1 sm:mb-3 md:mb-2"
                >
                  Ad Marketing
                </h1>
                <h3
                  className="font-poppins animate-fade-right opacity-70 cursor-scale text-[24px] 
                xs:text-5xl sm:text-3xl lg:text-4xl font-bold text-center tracking-wide word leading-tight "
                >
                  Agency
                </h3>
              </div>

              <div className="mt-4 md:mt-6 gap-2 flex flex-col items-center justify-center">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={"./showcase"}
                    className="border-2 border-black text-black rounded-full z-[2] text-md sm:text-xl 
                    cursor-pointer flex justify-center items-center w-32
                    sm:w-40 h-[50px] sm:hover:bg-black sm:hover:text-white  transition duration-400 ease-in-out"
                  >
                    Projects
                  </Link>
                  <Link
                    href={"./courses"}
                    className="border-2 border-black bg-black text-white rounded-full z-[2] text-md sm:text-xl 
                    cursor-pointer flex justify-center items-center w-32 
                    sm:w-40 h-[50px] transition duration-400 ease-in-out sm:hover:bg-opacity-90 "
                  >
                    Courses
                  </Link>
                </div>

                {/* <div className="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    className="relative w-10 h-10 text-white bg-black 
                rounded-full flex items-center justify-center "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="z-20 icon" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 text-white bg-black 
                rounded-full flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="z-20 icon" />
                  </a>
                </div> */}
              </div>
            </div>

            <div
              //  className="flex flex-col items-center relative -mt-10 sm:-mt-16 mb-0"
              className=" flex z-[2] items-center justify-center "
            >
              {/* <div className="image relative flex justify-center">
                        <Image className="animate-fade-up " src={introModel} alt="Model"/>
                    </div> */}
              <div
                className="w-[18em] h-[18em] md:w-[20em] md:h-[20em] bg-black lg:w-[28em] lg:h-[28em] rounded-full 
              overflow-hidden border-2 border-white relative blob-circle "
              >
                <Image
                  className="animate-fade-up w-full h-full object-cover border-black border-2  rounded-full "
                  src={mainLogo}
                  alt="Model"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex  items-center justify-center flex-col">
        <AnimatedShinyTextDemo />
        <h1>
          <CoverDemo />
        </h1>
        <p
          className="text-center
           text-xl mx-auto text-gray-500 md:text-2xl 
           md:w-4/5 my-6 md:my-10 "
        >
          Schedule a call with us to discuss your project and get a quote
          inminutes
        </p>

        <div
          className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
        >
          <Link
            href={"./meeting"}
            className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Meeting
          </Link>
          <Link
            href={"./showcase"}
            className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Projects
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              Design
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              Development
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              Marketing
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              Strategy
            </p>
          </BoxReveal>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 my-8 mx-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-2/5">
            <h1 className="text-[20px] sm:text-2xl md:text-3xl font-medium text-gray-600 mb-4 text-center md:text-left">
              Trusted by fast-moving brands worldwide
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex-1 text-center">
                <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-5xl">
                  <NumberTicker value={1000} /> +
                </h1>
                <p className="text-gray-500 text-sm sm:text-base md:text-md">
                  Happy Clients
                </p>
              </div>

              <div className="hidden md:block w-px bg-gray-300 h-12 md:h-full"></div>

              <div className="flex-1 text-center">
                <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                  <NumberTicker value={1200} /> +
                </h1>
                <p className="text-gray-500 text-sm sm:text-base md:text-md">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          <section className="hidden md:flex px-2 md:px-0 md:w-3/5 mt-6 md:mt-0 overflow-hidden">
            <InfiniteMovingLogos
              speed="slow"
              direction="left"
              items={[
                { logo: "/logo/logo-1.png", name: "Logo 1" },
                { logo: "/logo/logo-2.png", name: "Logo 2" },
                { logo: "/logo/logo-3.png", name: "Logo 3" },
                { logo: "/logo/logo-4.jpg", name: "Logo 4" },
                { logo: "/logo/logo-5.jpg", name: "Logo 5" },
                { logo: "/logo/logo-6.png", name: "Logo 6" },
                { logo: "/logo/logo-7.jpg", name: "Logo 7" },
                { logo: "/logo/logo-8.png", name: "Logo 8" },
                { logo: "/logo/logo-11.png", name: "Logo 11" },
              ]}
            />
          </section>
        </div>

        {/* <section className="mx-auto bg-neutral-900 rounded-[40px] w-full py-6">
          <div className="flex items-center justify-center">
              <div className="">
                  <h1>

                  </h1>
              </div>
          </div>
        </section> */}

        <section className="mx-auto bg-neutral-900 rounded-[40px] w-full py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           

            <div className="text-left text-white mb-12 w-full text-center ">
             
              <h2 className="md:text-5xl text-4xl font-bold mb-4 text-red-700">
                WE PROVIDE YOU BEST ADs MARKETING COURSES
              </h2>

              {/* <div className="w-[100px] h-[100px]">
                <Image
                src={offerLogo}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                />
              </div> */}

              <p className="md:text-2xl text-xl ">
                Over{" "}
                <span className="font-semibold text-red-600">200+</span>{" "}
                media options across{" "}
                <span className="font-semibold text-red-600">45 cities</span>{" "}
                Pan India
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="bg-white w-full rounded-lg text-center transition-all duration-300 hover:shadow-xl 
              hover:-translate-y-1 w-full flex items-center flex-col cursor-pointer z-30"
                >
          {/* <div className="flex justify-center mb-4">
                <offering.icon className="h-10 w-10 " />
              </div> */}

                  <div className="w-full h-[200px] px-2 mt-2">
                    <Image
                      src={offering.img}
                      className="w-full h-full object-cover"
                      width={1000}
                      height={1000}
                      alt="logo-pic"
                    />
                  </div>

                  <h3 className="text-lg font-semibold w-full bg-white text-black rounded-b-lg">{offering.title}</h3>
                </div>
              ))}
            </div>
          <ShootingStars />
          <StarsBackground />
          </div>

        </section>
      </main>
    </div>
  );
}

export default HeroSection;
