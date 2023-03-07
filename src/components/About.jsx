import React from 'react'
import Cartoon from "../assets/ayege.png";
function About() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Cartoon} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-picton-blue font-bold ">01. ABOUT ME</p>
          <h1 className="text-yellow-green md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className='py-2'>
            Hello! My name is Brittany and I enjoy creating things that live on
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
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React.
          </p>
          <button className="bg-eerie-black text-amber w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About