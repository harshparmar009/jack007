import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo-company.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">+91 7791819490</p>
          <p className="text-left  text-xl  text-gray-500">
            mail@jackinfosoft.com
          </p>
        </div>

        <div className="flex md:flex-row md:pb-[2rem] flex-col md:justify-center gap-x-4 mt-10">
          © 2015 JackInfoSoft LLP. All Rights Reserved.

          <Link href={"./about"} className="text-blue-500">
            About Us
          </Link>
          <Link href={"./privacy_policy"} className="text-blue-500">
            Privacy Policy
          </Link>
          <Link href={"./refund_policy"} className="text-blue-500">
            Refund Policy
          </Link>
          <Link href={"./T&C"} className="text-blue-500">
            T&C
          </Link>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
