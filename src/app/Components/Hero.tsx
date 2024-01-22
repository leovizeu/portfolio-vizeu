"use client";

import { CustomButtom } from "."
import Image from "next/image";

function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className="font-mono">
            <div className="h-96 py-80"></div>
            <p className="text-blue-500 font-light md:pl-12 pl-3 py-2">
                Greetings! My name is:
            </p>
            <h1 className="text-white text-4xl font-bold md:pl-12 pl-3 py-2 font-sans">
                Leonardo Vizeu
                <br />
                I like building online experiences.
            </h1>
            <p className="text-blue-500 md:px-12 md:leading-snug px-3 py-2">
                I’m Full Stack Developer hoping to change carrers and build awesome applications. Here's what i do:
            </p>
            
        </div>
    )
}
/*<div className="flex flex-row-reverse pr-5 pb-5">
                <CustomButtom
                    title ="Contact me"
                    containerStyles = "bg-blue-500 text-white font-bold rounded-full p-2 hover:bg-black hover:text-white"
                    handleClick = {handleScroll}
                />
            </div>*/
export default Hero