import React from "react";
import Navbar from "./components/Navbar";
import Custombutton from "./components/Custombutton";
import { useState } from "react";
import Footer from "./components/Footer";
import Sidenavigationbar from "./components/Sidenavigationbar";

export default function App() {
  const [selectedButton, setSelectedButton] = useState("All");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-32">
          <h2 className="text-display text-h2 max-w-[20ch] text-center text-accent">
            Curated Opportunities
            <span className="text-light-gray pl-2">for students :| </span>
          </h2>
          <p class="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
            Explore curated and handpicked opportunities that enhance your
            experience in tech.
          </p>
        </section>

        <section>
          <div className="fixed bottom-0 left-0 right-0 bg-bg p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50 ">
            <button className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between  text-accent">
              All
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="mb-8 sticky top-6 z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
            <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
              <Custombutton
                text="OS Programs"
                count={4}
                isSelected={selectedButton === "OS Programs"}
                onClick={() => handleButtonClick("OS Programs")}
              />
              <Custombutton
                text="Hackathons"
                count={8}
                isSelected={selectedButton === "Hackathons"}
                onClick={() => handleButtonClick("Hackathons")}
              />
              <Custombutton
                text="Student Programs"
                count={12}
                isSelected={selectedButton === "Student Programs"}
                onClick={() => handleButtonClick("Student Programs")}
              />
              <Custombutton
                text="Fellowship"
                count={2}
                isSelected={selectedButton === "Fellowship"}
                onClick={() => handleButtonClick("Fellowship")}
              />
              <Custombutton
                text="Women"
                count={3}
                isSelected={selectedButton === "Women"}
                onClick={() => handleButtonClick("Women")}
              />
              <Custombutton
                text="Mentorships"
                count={4}
                isSelected={selectedButton === "Mentorships"}
                onClick={() => handleButtonClick("Mentorships")}
              />
            </div>
          </div>
        </section>

        <section>
          <Sidenavigationbar />
        </section>
      </main>

      <Footer />
    </>
  );
}
