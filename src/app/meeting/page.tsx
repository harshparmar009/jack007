// "use client";

// import Calendly from '../../lib/calendly'
// import Navbar from "@/components/pages/navbar";
// import { PiCheckCircle } from "react-icons/pi";
// import { motion } from "framer-motion";

// const checkItemVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0 },
// };

// export default function Meeting(){



//   return (
//     <div className="
    
//     flex flex-col  w-full  

//      overflow-clip inset-0 -z-10 
//   bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
//     ">
//       <Navbar />
//       <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
//         <div className="md:w-2/5">
//           <h1 className="text-4xl font-semibold pt-10   ">Let&apos;s Meet</h1>
//           <p className="text-lg text-gray-500 py-4">
//             We are always excited to meet new people and discuss new projects.
//             Please feel free to book a meeting with us.
//           </p>

//           {[
//                 {
//                   title: "Development + Design",
//                   description:
//                     "Turn your ideas into reality with our development and design services.",
//                 },

//                 {
//                   title: "Free Consultation",
//                   description:
//                     "Get expert advice on how to improve your business and increase your online presence.",
//                 },
//                 {
//                   title: "Technical Support",
//                   description:
//                     "Get technical support for your website or application.",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   variants={checkItemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   transition={{ delay: index * 1.8 }}
//                   className="flex gap-x-4 py-4"
//                 >
//                   <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
//                   <ul>
//                     <h3 className="text-lg font-bold text-gray-700">
//                       {item.title}
//                     </h3>
//                     <div className="text-gray-400">{item.description}</div>
//                   </ul>
//                 </motion.div>
//               ))}
//         </div>

//     <div className="md:w-1/2">
//       <Calendly />
//       </div>
//       </div>
//     </div>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/pages/navbar";

export default function Meeting() {
  const phoneNumber = "917791819490"; // Remove the "+" for better compatibility

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the component runs only in the browser
  }, []);

  const makeCall = () => {
    if (isClient) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <div className="flex flex-col w-full overflow-clip inset-0 -z-10 bg-[#fafafa]">
      <Navbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto md:mt-14">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>
        </div>

        {/* Add a simple form or a contact button here */}
        <div className="mt-6">
          <button
            onClick={makeCall}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
