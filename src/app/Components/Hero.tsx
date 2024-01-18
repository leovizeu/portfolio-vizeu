"use client";

import { CustomButtom } from "."
import Image from "next/image";

function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className="">
            <h1 className="text-black text-6xl font-bold p-20 pl-12">Leonardo Vizeu</h1>
            <p className="text-black text-6xl py-48 px-12 leading-snug">
                Greetings! <br />
                I’m Full Stack Developer hoping to change carrers and build awesome applications. Here's what i do:
            </p>
            <div className="flex flex-row-reverse pr-5 pb-5">
                <CustomButtom
                    title ="Contact me"
                    containerStyles = "bg-blue-500 text-white font-bold rounded-full p-2 hover:bg-black hover:text-white"
                    handleClick = {handleScroll}
                />
            </div>
        </div>
    )
}

export default Hero