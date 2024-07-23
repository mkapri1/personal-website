"use client";
import React from "react";
import Image from "next/image";


import { TypeAnimation } from 'react-type-animation';


    
const HeroSection = () => {
    return (
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className= "text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> 
                        <span className= "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"> Hello, I'm{" "} </span> <br /> 
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Malika!',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Software Engineer',
                            1000,
                            'Tech Consultant',
                            1000,
                            'AI Engineer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text- base sm:text-lg mb-6 lg:text-xl">
                        I'm a Computer Science Grad, with interests in AI/ML.
                    </p>
                
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 lg:mg-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 hover:bg-slate-300 text-white"> Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 hover:bg-slate-800 text-white mt-4"> 
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Resume </span></button>
                    </div>
                </div>
            <div className="col-span-5 place-self-center mt-5 lg:mt-3">
                <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative overflow-hidden">
                    <Image 
                        src="/images/hero-image.png" 
                        alt="hero image"
                        className="absolute w-full h-full object-cover"
                        style={{ borderRadius: '50%' }}
                        layout="fill"
                    />
                </div>
                
            </div>
        </div>
                
        </section>
    );
};

    export default HeroSection;