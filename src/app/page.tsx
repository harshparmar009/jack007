"use client";

import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { Element } from "react-scroll";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Navbar from "@/components/pages/navbar";
import HeroSection from "@/components/pages/HeroSection";
import Feedback from "@/components/pages/Feedback";
import Services from "@/components/pages/Services";
import Process from "@/components/pages/Process";
import Footer from "@/components/footer";
// import Landing from "@/components/pages/Landing";


export default function Home() {
  return (<div
    className="overflow-clip 
    inset-0 
    -z-10 h-full w-full 
    bg-white
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px] "
    >  
      
      <Navbar/>
      {/* <Landing/> */}
      <HeroSection/>

         <Services/>

        <section className="py-20">
        <ScrollBasedVelocityDemo />
       </section>
      
    <Process/>

       <div>
         <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>Client Feedback</h1>
        <Feedback/>
       </div>

       <Element name="guarentees">
         <ShootingStarsAndStarsBackgroundDemo />
       </Element>

       <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
       <LetsMakeThingsHappenSection />
       </section>  

     <Footer/> 
    </div>
  );
}