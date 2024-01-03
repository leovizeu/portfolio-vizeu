"use client";

import { CustomButtom } from "./index"

function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className="bg-gray-200">
            <h1 className="text-black text-6xl font-bold pt-20 pl-12">Leonardo Vizeu</h1>
            <p className="text-black text-6xl pt-52 pl-12">
                    Greetings! <br />
                    I’m Full Stack Developer hoping to change carrers and start this new journey as a software developer. Here's what i do:
                </p>

                <CustomButtom 
                    title ="Contact me"
                    containerStyles = "bg-blue-500 text-white rounded-full p-2"
                    handleClick = {handleScroll}
                />
        </div>
    )
}

export default Hero