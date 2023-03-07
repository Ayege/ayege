import React from 'react'
import AboutMe from "../assets/Aboutme.png";
import { motion } from "framer-motion";
import Typed from "react-typed";

function About() {
  return (
    <div className="w-full bg-white py-8 px-4 font-sans">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 relative">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { type: "easeIn", duration: "2", delay:".5"},
          }}
          exit={{ opacity: 0 }}
          className="w-[500px] mx-auto rounded-full transition-all duration-500 bg-gradient-to-t to-picton-blue via-amber from-vermillion bg-size-200 bg-pos-0 hover:bg-pos-100"
          src={AboutMe}
          alt="/"
        ></motion.img>
        <div className="flex flex-col justify-center">
          <p className="text-picton-blue font-bold ">01. ABOUT ME</p>
          <h1 className="text-yellow-green md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            A{" "}
            <Typed
              strings={[
                "react developer,",
                "mongoDB developer,",
                "wordpress developer,",
                "fullStack developer,",
                "IT project manager,",
                "cat lover,",
                "Dreamer.",
              ]}
              typeSpeed={40}
            />
          </h1>
          <p className="py-2">
            Hello! My name is Ayesha and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <button className="bg-eerie-black text-amber w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:animate-pulse">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About