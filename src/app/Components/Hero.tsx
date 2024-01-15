"use client";

import { CustomButtom } from "."
import Image from "next/image";

function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className="">
            <p className="text-black text-6xl pt-52 pl-12 leading-snug">
                    Greetings! <br />
                    I’m Full Stack Developer hoping to change carrers and start this new journey as a software developer. Here's what i do:
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