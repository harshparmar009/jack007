import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
       <footer className="bg-black py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div>
          <Image src="/logo/4.png" width={160} height={60} alt="JackInfoSoft Logo" className="w-40" />
          <p className="text-lg text-gray-500 mt-4">+91 7791819490</p>
          <p className="text-lg text-gray-500">mail@jackinfosoft.com</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-col md:flex-row items-center md:gap-8 text-gray-600 text-lg">
          <Link href="./about" className="hover:text-blue-500">About Us</Link>
          <Link href="./privacy_policy" className="hover:text-blue-500">Privacy Policy</Link>
          <Link href="./refund_policy" className="hover:text-blue-500">Refund Policy</Link>
          <Link href="./T&C" className="hover:text-blue-500">T&C</Link>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2015 JackInfoSoft LLP. All Rights Reserved.
      </div>
    </footer>
    </div>
  );
}

export default Footer;
