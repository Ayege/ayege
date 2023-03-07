import React from "react";
import Cartoon from "../assets/ayege.png";
import Typed from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <main className="bg-eerie-black font-sans">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-50">
          <div className="text-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
              exit={{ opacity: 0 }}
              className="rounded-full w-[285px] mx-auto mt-[-4rem] transition-all duration-500 bg-gradient-to-t to-picton-blue via-amber from-vermillion bg-size-200 bg-pos-0 hover:bg-pos-100"
              src={Cartoon}
              alt="Ayesha Yege and her cat Zelda"
            ></motion.img>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2.2, delay: 0.8 },
              }}
              exit={{ opacity: 0 }}
              className="text-4xl font-bold tracking-tight text-yellow-green sm:text-6xl py-2"
            >
              Ayesha Yege
            </motion.h1>
            <motion.h3
              className="text-xl font-bold tracking-tight text-picton-blue sm:text-3xl  py-2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2.2, delay: 1 },
              }}
              exit={{ opacity: 0 }}
            >
              I am a{" "}
              <Typed
                strings={[
                  "React Developer",
                  "MongoDB Developer",
                  "Wordpress Developer",
                  "FullStack Developer",
                ]}
                typeSpeed={40}
              />
            </motion.h3>
            <motion.p
              className="mt-2 text-lg leading-8 text-white"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2.2, delay: 1.2},
              }}
              exit={{ opacity: 0 }}
            >
              I’m a software engineer specializing in building and designing
              exceptional digital experience.
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
