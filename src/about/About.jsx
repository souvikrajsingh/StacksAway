import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-2 font-cabinG text-light-gray p-4 md:p-12">
        <header className="flex text-display text-h5 md:text-h2 max-w-[20ch] text-center text-accent mb-4 md:mb-0">
          <h1>About</h1>
          <h2 className="pl-2 text-light-gray">StacksAway</h2>
        </header>
        <article className="text-h6 md:text-h5 space-y-2 md:space-y-7">
          <p>
            I created <strong>StacksAway</strong> to bridge the gap students
            face in finding tech opportunity in college. Starting from Student
            Programs , Mentorship Programs, Open Source Programs, or Fellowship
            Programs
          </p>
          <p>
            I saw this video of a very talented YouTuber <strong>huyNG</strong>{" "}
            who created something similar for the frontend community. I was
            inspired by his work and decided to create something similar for the
            tech student community. The design is inspired by his work but i
            made some changes to it to make it more unique.
          </p>
        </article>
      </section>

      <Footer />
    </>
  );
}

export default About;
