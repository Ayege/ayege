import React from "react";
import Cartoon from '../assets/ayege.png'

function Hero() {
  return (
    <main className="bg-eerie-black font-sans">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-50">
          <div className="text-center">
            <img className='rounded-full w-[285px] mx-auto mt-[-4rem] transition-all duration-500 bg-gradient-to-t to-picton-blue via-amber from-vermillion bg-size-200 bg-pos-0 hover:bg-pos-100'
              src={Cartoon}
              alt="Ayesha Yege and her cat Zelda"
            ></img>
            <h1 className="text-4xl font-bold tracking-tight text-yellow-green sm:text-6xl  py-2">
              Ayesha Yege
            </h1>
            <h3 className="text-xl font-bold tracking-tight text-picton-blue sm:text-3xl  py-2">
              Full Stack Developer
            </h3>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
