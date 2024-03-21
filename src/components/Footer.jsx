import React from "react";
import FooterLarge from "./FooterLarge";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const Link = ({ href, children }) => (
    <div className="group relative flex">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <GoArrowUpRight
        className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-all ease-in-out-circ duration-500"
        size={18}
      />
    </div>
  );

  return (
    <footer className="px-6">
      <div className="border-b border-b-dim-gray pb-6 mt-8"></div>
      <div className="mt-4 mb-96">
        <FooterLarge />
      </div>

      <div className="flex justify-between items-center gap-4 my-5">
        <div className="flex flex-col">
          <Link href="https://www.yoursocialmedia.com">Twitter</Link>
          <Link href="mailto:youremail@example.com">
            souvikrajsingh02@gmail.com
          </Link>
          <Link href="https://www.yoursocialmedia.com">Contrbute</Link>
          <Link href="https://www.yoursocialmedia.com">About</Link>
          <Link href="https://forms.gle/qDE1JXUK2w9Nhh7v6">Add a Resource</Link>
        </div>

        <p className="text-xs text-gray-500">
          © 2024 <span className="font-bold">STACKSAWAY</span> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
