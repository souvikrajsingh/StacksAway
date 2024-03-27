import React from "react";
import Logosimplewhite from "./Logosimplewhite";
import Button from "./Buttons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" border-b-2 px-8 border-b-dim-gray border-opacity-30 font-cabinG">
      <nav className="px-0 sm:px-6 pt-1 pb-2 xl:pb-4 2xl:pb-6  border-gray border-opacity-20 mt-4 xl:mt-8 2xl:mt-10  flex items-center justify-between">
        <div className="flex justify-start gap-4">
          <Logosimplewhite />
          <Link to="/">
            <h1
              className="font-bold text-h2 font-cabinG"
              style={{ color: "#D0C7B3" }}
            >
              STACKSAWAY
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-x-8">
          <span className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5">
            <Link to="/about">
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                About
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">
                About
              </span>
            </Link>
          </span>
          <Button target="_blank" href="https://forms.gle/PftXkai3sNZquWu68">
            Add a Resource
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
