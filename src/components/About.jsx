import React from "react";
import AboutMe from "../assets/Aboutme.png";
import Typed from "react-typed";

function About() {
  return (
    <div className="w-full bg-white px-4 font-sans">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="animate-fade-in">
          <img
            className="w-[500px] mx-auto rounded-full transition-all duration-500 bg-gradient-to-t to-picton-blue via-amber from-vermillion bg-size-200 bg-pos-0 hover:bg-pos-100  z-10"
            src={AboutMe}
            alt="Ayesha the developer"
          ></img>
        </div>
        <div className="flex flex-col justify-center md:mx-4">
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
          <p className="py-2 text-justify">
            Hello and welcome to my personal portfolio! My name is Ayesha, and I
            am a passionate web developer with a focus on creating beautiful,
            functional, and user-friendly websites.
          </p>
          <p className="py-2 text-justify">
            I began my journey as a web developer by studying computer science
            in college, where I learned the fundamentals of programming,
            algorithms, and data structures. I then went on to hone my skills
            through a combination of self-study and real-world experience,
            working on a variety of projects ranging from small personal
            websites to large e-commerce platforms.
          </p>
          <p className="py-2 text-justify">
            Today, I am proud to say that I have a wealth of experience in web
            development, including proficiency in a range of programming
            languages and frameworks such as HTML, CSS, JavaScript, React, and
            Node.js. I am also highly skilled in user experience design,
            information architecture, and project management. But perhaps most
            importantly, I am passionate about using my skills to make a
            positive impact on the world. Whether it's through creating a
            website for a small business owner or developing an application that
            improves people's lives, I am driven by the belief that technology
            can be a force for good.
          </p>
          <button className="bg-eerie-black text-amber w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:animate-pulse">
          <a href="https://drive.google.com/file/d/17xqwjQVPIpgEns4OXtgUx7VL1s37EDWv/view?usp=sharing" download="Ayesha Yege - PM and Web Dev">Download CV</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
