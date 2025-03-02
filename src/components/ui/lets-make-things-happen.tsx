import React from "react";
import { Twitter, Facebook, Instagram, Linkedin, Github, Youtube, ExternalLink } from "lucide-react"

function LetsMakeThingsHappenSection() {
  const socialLinks = [
    // { name: "Twitter", icon: Twitter, color: "hover:text-blue-400", url: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, color: "hover:text-blue-600", url: "https://www.facebook.com/jackinfosoft" },
    { name: "Instagram", icon: Instagram, color: "hover:text-pink-500", url: "https://www.instagram.com/jackinfosoft/" },
    // { name: "LinkedIn", icon: Linkedin, color: "hover:text-blue-700", url: "https://linkedin.com" },
    // { name: "GitHub", icon: Github, color: "hover:text-gray-800 dark:hover:text-gray-200", url: "https://github.com" },
    { name: "YouTube", icon: Youtube, color: "hover:text-red-600", url: "https://youtube.com" },
  ]

  return (
    // <section className="
    //  my-10 md:py-20  md:mx-auto
    // bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
    //   <div className="md:pr-[22rem]">
    //     <p className="text-3xl font-medium">
    //       Let&apos;s make things happen
    //     </p>

    //     <p className="my-10 text-xl">
    //       Contact us today to learn more about how our digital marketing
    //       services can help your business grow and succeed online.
    //     </p>

    //     <Link
    //       href="/meeting"
    //       className="py-3 
    //         px-10
        
    //         md:px-16
    //   md:text-xl
    //   hover:bg-[#abcbff] 
    //   rounded-[6px]
    //   border-2 
    //   border-black 
    //   dark:border-white 
    //    bg-[#121212] 
    //    text-white 
    //    transition 
    //    duration-200 
    //    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
    //     >
    //       Book a Call
    //     </Link>
    //   </div>
    //   <div className="absolute -top-8 right-8 hidden md:block">
    //     <Image
    //       src="/logo/new-jack-logo.png"
    //       alt="proposal illustration"
    //       width={300}
    //       height={300}
    //     />
    //   </div>
    // </section>
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-[2rem] mb-[2rem]">
      <h2 className="text-xl font-bold text-center mb-6">Connect With Me</h2>
      <div className="grid grid-cols-3 gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="relative transition-all duration-300 group-hover:scale-110">
              <social.icon className={`h-8 w-8 transition-colors duration-300 ${social.color}`} />
              <ExternalLink className="absolute -top-1 -right-1 h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className={`mt-2 text-sm font-medium transition-colors duration-300 ${social.color}`}>
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LetsMakeThingsHappenSection;