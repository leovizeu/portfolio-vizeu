"use client";

import React from "react";
import Image from "next/image";
import { CustomButtom } from ".";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"

function Hero() {

    const handleScroll = () => {

    }

    const Typo = () => {
        return (
            <div className="App">
                <h1 className="text-blue-500 font-light py-2 inline-block whitespace-nowrap overflow-hidden">
                    <Typewriter
                        words={['Greetings! My name is']}
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                </h1>
            </div>
        )
    }

    return (
        <div className="font-mono">
            <motion.div initial={{ x:-1000 }} animate={{ x: 0 }} transition={{ delay: 0.2 }} className="py-80 pl-3 md:pl-12">
                <p className="text-blue-500 font-light inline-block whitespace-nowrap overflow-hidden">
                    {Typo()}
                </p>
                <h1 className="text-white text-4xl font-bold font-sans duration-100">
                    Leonardo Vizeu
                    <br />
                    I like building online experiences.
                </h1>
                <p className="text-gray-500 text-sm md:w-6/12 md:leading-snug py-2">
                    I'm a dedicated software engineer who enjoys crafting web applications.
                    My goal is to build innovative and user-friendly digital experiences.
                    I started developing my own game, allowing me to express my skills in both practical and 
                    imaginative aspects of software engineering. <br />
                    Here's what i do:
                </p>
                <div className="flex justify-start">
                    <div>
                        <div className="flex flex-row pr-3 py-4">
                            <CustomButtom
                                title ="Projects"
                                containerStyles = "bg-blue-500 text-white text-xs font-bold rounded-md p-2 hover:bg-white hover:text-blue-500"
                                handleClick = {handleScroll}
                            />
                            <a href='#projects'></a>
                        </div>
                    </div>
                    <div className="flex px-2 items-center">
                     <a href="https://github.com/leovizeu" target="_blank">
                        <Image src='/github.svg' height={25} width={30} alt="Github Logo"  
                        className="transition ease-in-out delay-150 hover:-translate-y-1 duration-80"></Image>
                    </a>   
                    </div>
                    <div className="flex px-2 items-center">
                        <a href="https://www.linkedin.com/in/leovizeu/" target="_blank">
                            <Image src='/linked.svg' height={25} width={30} alt="Github Logo"  
                            className="transition ease-in-out delay-150 hover:-translate-y-1 duration-80"></Image>
                        </a>   
                    </div>
                    
                </div>
                
            </motion.div>
            
            <div className="xl:py-20 xl:px-10" id="about">
                <div className="md:flex">
                    <motion.div initial={{ x: -500 }} whileInView={{ x: 0 }} className="md:flex md:items-center md:shrink-0">
                        <Image 
                        src='/DSCF1428.jpg' 
                        height={550} 
                        width={550} 
                        alt="Leonardo's photo"
                        className="aspect-square object-none object-top rounded-full md:h-60 md:w-60 md:object-cover"
                        />
                    </motion.div>
                    <motion.div initial={{ x: 900 }} whileInView={{ x: 0 }} transition={{ delay: 0.1 }} className="p-8">
                        <div className="flex absolute uppercase tracking-wide text-xl text-blue-500 font-semibold">
                            0.
                        </div>
                        <h1 className="flex pl-7 text-white text-xl">
                            About me
                        </h1>
                        <p className="mt-2 text-slate-500">
                            Welcome! My name is Leonardo and i enjoy creating modern web applications. I originaly 
                            started my journey as a self-taught Java developer but have since grown to work with
                            multiple technologies, including Javascript, Next.js, Node.js, and NoSQL databases.
                            <br />
                            (Currently seeking for a job opportunity)
                        </p>
                        <br />
                        <p className="text-sm font-bold text-white">
                            Some Technologies I use are:
                        </p>
                        <div className="flex gap-5">
                            <ul className="text-blue-500 list-disc pl-5 pt-5">
                                <li>Javascript</li>
                                <li>Next.js</li>
                                <li>Node.js</li>
                            </ul>
                            <ul className="text-blue-500 list-disc pl-5 pt-5">
                                <li>Java</li>
                                <li>Spring</li>
                                <li>Python</li>
                            </ul>  
                        </div>
                    </motion.div>
                </div>
            </div>
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