import React from "react";
import FooterLarge from "./FooterLarge";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const Link = ({ href, children }) => (
    <div className="group relative flex pb-2">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <span className="relative overflow-hidden h-fit w-fit">
        <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
        <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
      </span>
    </div>
  );

  return (
    <footer className="mx-4">
      <div className="border-b border-b-dim-gray pb-6 mt-8"></div>
      <div className="mt-4 mb-96">
        <FooterLarge className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3" />
      </div>

      <div className="flex justify-between items-center gap-4 my-5 font-cabinG text-base">
        <div className="flex flex-col">
          <Link href="https://www.yoursocialmedia.com">Twitter</Link>
          <Link href="mailto:youremail@example.com">
            souvikrajsingh02@gmail.com
          </Link>
          <Link href="https://www.yoursocialmedia.com">Contribute</Link>
          <Link href="https://www.yoursocialmedia.com">About</Link>
          <Link href="https://forms.gle/qDE1JXUK2w9Nhh7v6">Add a Resource</Link>
        </div>

        <p className="text-xs text-gray-500">
          © 2024 <span className="font-bold ">STACKSAWAY</span> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
