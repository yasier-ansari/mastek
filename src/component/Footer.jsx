import React from 'react'
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="pt-8 md:pt-10 pb-4 md:pb-6 lg:mt-8 px-4 sm:px-6 md:px-8 lg:px-16 w-full mx-auto bg-gradient-to-br from-indigo-700 text-white to-blue-900 " >
            <div className="max-w-6xl mx-auto " >
                <div className="flex flex-col space-y-12 md:flex-row md:items-baseline md:space-y-0  md:justify-between">
                    <div className="flex justify-between md:basis-[50%] lg:basis-[40%]">
                        <div className="basis-[50%] md:basis-[45%]" >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-8" >Navigate</h3>
                            <div className="flex flex-col space-y-4">
                                <a href="">Home</a>
                                <a href="">Services</a>
                                <a href="">Contact Us</a>
                                <a href="">Blog</a>
                            </div>
                        </div>
                        <div className="basis-[50%] md:basis-[45%]" >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-8" >Contact</h3>
                            <div className="flex flex-col space-y-6">
                                <div className="flex space-x-4 items-center" >
                                    <div className="flex self-start mt-1" >
                                        < HiMapPin />
                                    </div>
                                    <div  >
                                        123, any street , any place, India - 400000
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-center" >
                                    <div>
                                        < HiPhone />
                                    </div>
                                    <div>
                                        +91 9090909090
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-center" >
                                    <div>
                                        < HiEnvelope />
                                    </div>
                                    <div>
                                        comp.contact@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:basis-[40%] lg:basis-[40%] lg:pl-20 ">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-8" >Subscribe</h3>
                        <form action="" className="flex flex-col space-y-4 ">
                            <p className="mb-3">The latest Stemly news, article and resources, sent straight ti your inbox every month</p>
                            <div className="flex justify-between text-black space-x-4 md:space-x-6">
                                <input type="text" className="rounded-lg w-full h-10 bg-gray-100 px-3 py-1 outline-none" placeholder="email address" />
                            </div>
                            <div className=" mx-auto w-full" >
                                <button className="bg-blue-500 rounded-xl text-white w-full h-10 px-1 py-1 font-semibold " >Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center space-y-4 md:space-y-6 lg:space-y-8 flex-col mt-12 md:mt-16 lg:mt-20">
                    <div className="flex justify-center space-x-6 md:space-x-10 lg:space-x-16">
                        <div className="flex justify-center items-center w-10 h-10 p-1 md:w-12 md:h-12 md:p-2 bg-white  lg:bg-inherit lg:hover:bg-white rounded-xl group">
                            <FaTwitter className="h-6 w-6 md:h-8 md:w-8 stroke-blue-800 stroke-2 lg:fill-white lg:group-hover:fill-blue-800 transition-all duration-150 fill-blue-900" />
                        </div>
                        <div className="flex justify-center items-center w-10 h-10 p-1 md:w-12 md:h-12 md:p-2 bg-white  lg:bg-inherit lg:hover:bg-white rounded-xl group">
                            <AiFillInstagram className="h-6 w-6 md:h-8 md:w-8 stroke-blue-800 stroke-2 lg:fill-white lg:group-hover:fill-blue-800 transition-all duration-150 fill-blue-900" />
                        </div>
                        <div className="flex justify-center items-center w-10 h-10 p-1 md:w-12 md:h-12 md:p-2 bg-white  lg:bg-inherit lg:hover:bg-white rounded-xl group">
                            <FaLinkedinIn className="h-6 w-6 md:h-8 md:w-8 stroke-blue-800 stroke-2 lg:fill-white lg:group-hover:fill-blue-800 transition-all duration-150 fill-blue-900" />
                        </div>
                        <div className="flex justify-center items-center w-10 h-10 p-1 md:w-12 md:h-12 md:p-2 bg-white  lg:bg-inherit lg:hover:bg-white rounded-xl group">
                            <FaFacebookF className="h-6 w-6 md:h-8 md:w-8 stroke-blue-800 stroke-2 lg:fill-white lg:group-hover:fill-blue-800 transition-all duration-150 fill-blue-900" />
                        </div>
                    </div>
                    <div className=" text-center text-sm md:text-sm lg:text-md">
                        <p className="text-white/80 font-semibold " > &copy; 2023 ABC company </p>
                        <p className="font-base text-white/60" > Terms & Condition </p>
                    </div>
                </div>
                <a href='https://github.com/yasier-ansari' target="_blank" rel="noreferrer" className="flex items-center justify-center text-center text-white/40 ">
                    <p className=" text-bold text-xs pt-2 md:pt-4 hover:text-white hover:font-bold w-max">Designed & Built By Yasier </p>
                </a>
            </div>

        </footer>
    )
}

export default Footer