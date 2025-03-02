import Navbar from "@/components/courses-navbar";
import Footer from "@/components/footer";
import Image from 'next/image';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
// import SeoMastery from '/public/images/seo-mastery.jpg'

export default function Courses() {

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

    // const [email, setEmail] = useState('');
    // const [notify, setNotify] = useState(false);
  
    // const handleNotify = () => {
    //   if (email) {
    //     setNotify(true);
    //     // You can add logic here to send email data to a backend or API.
    //   }
    // };

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
      
    <section className="mx-auto bg-neutral-900 rounded-[40px] w-full py-6 mt-[10rem] mb-[2rem]">
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

    <div className="relative group w-full bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="w-full h-[200px] px-2 mt-2 relative">
        <Image
          src={offering.img}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          alt="logo-pic"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold w-full bg-white text-black rounded-b-lg p-2">
        {offering.title}
      </h3>
      
      {/* Add to Cart Button */}
      <button className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        Add to Cart
      </button>
    </div>

    </div>
              ))}
            </div>
          <ShootingStars />
          <StarsBackground />
          </div>

        </section>
        
    <Footer/>
    </div>
  )
}