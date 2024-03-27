import React from "react";
import Navbar from "./components/Navbar";
import Custombutton from "./components/Custombutton";
import { useState } from "react";
import Footer from "./components/Footer";
import Sidenavigationbar from "./components/Sidenavigationbar";
import Card from "./components/Card/Card";
import PlusIcon from "./components/Plusicon";

export default function App() {
  const cardData = [
    {
      month: "January",
      title: "Major League Hacking",
      program: "Mentorships",
      picUrl: "./assets/mlh-logo-color-white.png",
    },
    {
      month: "January",
      title: "Microsoft Learn Student Ambassadors",
      program: "Student Programs",
      picUrl: "./assets/mlsa.jpg",
    },
    {
      month: "January",
      title: "Github Campus Expert",
      program: "Student Programs",
      picUrl: "./assets/gce.png",
    },
    {
      month: "February",
      title: "Google Season of Docs",
      program: "Open Source Programs",
      picUrl: "./assets/gsod.png",
    },
    {
      month: "March",
      title: "Google Summer of Code",
      program: "Open Source Programs",
      picUrl: "./assets/gsoc.png",
    },

    {
      month: "October",
      title: "Hacktoberfest",
      program: "Open Source Programs",
      picUrl: "./assets/hacktoberfest.png",
    },

    {
      month: "Varies",
      title: "Outreachy",
      program: "Open Source Programs",
      picUrl: "./assets/outreachy.png",
    },
    {
      month: "August",
      title: "Season of KDE",
      program: "Open Source Programs",
      picUrl: "./assets/kde.png",
    },
    {
      month: "February",
      title: "Open Mainframe Project Mentorship Program",
      program: "Mentorships",
      picUrl: "./assets/omp.png",
    },
    {
      month: "Two months",
      title: "FOSSASIA Codeheat",
      program: "Open Source Programs",
      picUrl: "./assets/fossasia.png",
    },

    {
      month: "September",
      title: "Redox OS Summer of Code",
      program: "Open Source Programs",
      picUrl: "./assets/r.png",
    },
    {
      month: "December",
      title: "Hyperledger Mentorship Program",
      program: "Mentorships",
      picUrl: "./assets/hmp.png",
    },
    {
      month: "April",
      title: "Open Summer of Code",
      program: "Open Source Programs",
      picUrl: "./assets/oso.png",
    },
    {
      month: "April",
      title: "GirlScript Summer of Code (GSSoC)",
      program: "Open Source Programs",
      picUrl: "./assets/gssoc.png",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("All");
  const handleButtonClick = (text) => {
    if (selectedButton === text) {
      setSelectedButton("All");
    } else {
      setSelectedButton(text);
    }
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
          <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
            Explore curated and handpicked opportunities that enhance your
            experience in tech.
          </p>
        </section>

        <section>
          <div className="fixed bottom-0 left-0 right-0 bg-bg p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50 ">
            <button className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between  text-accent">
              All
              <span>
                <PlusIcon />
              </span>
            </button>
          </div>

          <div className="mb-8  z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
            <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
              <Custombutton
                text="Open Source Programs"
                count={4}
                isSelected={selectedButton === "Open Source Programs"}
                onClick={() => handleButtonClick("Open Source Programs")}
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

        <div className="grid grid-cols-3 gap-2">
          <div>
            <Sidenavigationbar />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6  gap-y-6  pr-14 ml-[-80px]">
            {cardData
              .filter(
                (card) =>
                  selectedButton === "All" || card.program === selectedButton
              )
              .map((card, index) => (
                <div key={index}>
                  <Card
                    month={card.month}
                    title={card.title}
                    program={card.program}
                    picUrl={card.picUrl}
                  />
                </div>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
