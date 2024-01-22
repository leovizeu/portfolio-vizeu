"use client";

import { CustomButtom } from "."
import Image from "next/image";

function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className="pt-36">
            <p className="text-blue-600 font-light md:p-20 md:pl-12 pl-3">
                Greetings! My name is:
            </p>
            <h1 className="text-white text-6xl font-bold md:p-20 md:pl-12 pl-3">Leonardo Vizeu</h1>
            <p className="text-blue-500 text-6xl md:py-48 md:px-12 md:leading-snug px-3 py-12">
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