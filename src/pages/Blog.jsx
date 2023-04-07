import { useState, useEffect } from "react";
import {
    blog1,
    blog
} from "../assets";

import {
    RiSettingsLine,
    RiCheckLine,
    RiCheckFill,
} from "react-icons/ri";
import { VscCheck } from "react-icons/vsc";
import { blogMain } from "../assets";

const Blog = () => {
    const [loading, setLoading] = useState(true);
    const loadData = async () => {
        // Wait for two second
        await new Promise((r) => setTimeout(r, 3000));

        // Toggle loading state
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, [])

    const style = {
        backgroundImage: `url(${blog})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maskImage: 'linear-gradient(to right, transparent 10%, #000000)',
        filter: 'hue-rotate(-10deg)'
    }
    return (
        <main className="">
            {
                loading ? (<div className="flex justify-center items-center h-screen w-screen ">
                    <div class="loader"></div>
                </div>) : (
                    <>
                        <section id="blog" className="max-w-full " style={style}>
                            <div className="max-w-7xl px-3 sm:px-6 md:px-10 lg:px-12 text-white mx-auto flex flex-col md:flex-row space-y-8 sm:space-y-10 md:justify-between items-center">
                                <div className="py-16 md:py-20 lg:py-28 max-w-2xl flex-col space-y-6 sm:space-y-8 md:space-y-12">
                                    <h1 className="text-2xl max-w-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-plus text-center md:text-start">
                                        Learn more about the market through our  {" "}
                                        <span className="bg-gradient-to-tr text-transparent bg-clip-text from-blue-300 to-purple-600">
                                            Blog
                                        </span>{" "}
                                    </h1>
                                    <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl text-center md:text-start">
                                        It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls
                                    </h4>
                                </div>
                            </div>
                        </section>
                        <section
                            id="trending"
                            className="px-3 sm:px-6 md:px-10 lg:px-12 md:-mt-6 max-w-7xl mx-auto py-4"
                        >
                            <div className="">
                                <h3 className="text-center font-semibold text-lg md:text-xl lg:text-2xl text-gray-500 my-6 md:mb-12 ">
                                    Trending
                                </h3>
                                <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-4 pt-0 ">
                                    <div className="image justify-center px-4 mx-auto">
                                        <a href="/">
                                            <img
                                                src={blogMain}
                                                width={500}
                                                height={500}
                                                className="rounded-xl"
                                            />
                                        </a>
                                    </div>
                                    <div className="info flex justify-center md:justify-between md:py-8 lg:py-12 flex-col h-full">
                                        <div className="category">
                                            <span className="px-2 py-1 bg-indigo-400 rounded-xl font-bold text-white text-sm md:text-md">
                                                CyberSecurity
                                            </span>
                                            <span className="text-gray-400 hover:text-gray-600 text-xs ml-2">
                                                {" "}
                                                12th Dec, 2022
                                            </span>
                                        </div>
                                        <div className="title  mt-4 md:mt-3">
                                            <a href="/blogpage">
                                                <span className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-plus font-extrabold text-gray-800 hover:text-indigo-400 leading-snug md:leading-tight ">
                                                    His room, a proper human room although a little too small
                                                </span>
                                            </a>
                                        </div>
                                        <p className=" py-3 mx-1 text-sm md:text-md lg:text-base xl:text-lg md:mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Quas eius aspernatur pariatur ab fuga optio
                                            deserunt, tenetur cum quasi dolore, dignissimos
                                            molestias corporis libero sunt modi, assumenda et
                                            autem ratione. Lorem ipsum dolor, sit amet consectetur
                                            adipisicing......
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            id="blog"
                            className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-16 lg:px-20 max-w-7xl mx-auto "
                        >
                            <div>
                                <h3 className="text-center font-semibold text-lg md:text-xl lg:text-2xl text-gray-500 my-6">
                                    Latest From Us
                                </h3>
                                <div className="flex mx-auto justify-center items-center">
                                    <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap mx-auto items-center gap-y-6 md:gap-y-10 md:gap-x-12 ">
                                        <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                            <div className=" " >
                                                <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                            </div>
                                            <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                                <div className="flex justify-between items-center mx-2">
                                                    <div className="flex space-x-3 justify-start">
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >Awards</p>
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >IoT</p>
                                                    </div>
                                                    <div className="text-gray-500" >
                                                        <p>
                                                            Feb 13, 2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <a href="/blogpage" className="text-lg md:text-xl px-2  lg:text-2xl font-semibold leading-tight tracking-tight  ">
                                                    His room, a proper human room although a little too small
                                                </a>
                                                <div className="text-sm md:text-md px-2 font-base ">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                            <div className=" " >
                                                <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                            </div>
                                            <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                                <div className="flex justify-between items-center mx-2">
                                                    <div className="flex space-x-3 justify-start">
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >Awards</p>
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >IoT</p>
                                                    </div>
                                                    <div className="text-gray-500" >
                                                        <p>
                                                            Feb 13, 2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <a href="/blogpage" className="text-lg md:text-xl px-2  lg:text-2xl font-semibold leading-tight tracking-tight  ">
                                                    His room, a proper human room although a little too small
                                                </a>
                                                <div className="text-sm md:text-md px-2 font-base ">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                            <div className=" " >
                                                <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                            </div>
                                            <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                                <div className="flex justify-between items-center mx-2">
                                                    <div className="flex space-x-3 justify-start">
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >Awards</p>
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >IoT</p>
                                                    </div>
                                                    <div className="text-gray-500" >
                                                        <p>
                                                            Feb 13, 2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <a href="/blogpage" className="text-lg md:text-xl px-2  lg:text-2xl font-semibold leading-tight tracking-tight  ">
                                                    His room, a proper human room although a little too small
                                                </a>
                                                <div className="text-sm md:text-md px-2 font-base ">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                            <div className=" " >
                                                <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                            </div>
                                            <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                                <div className="flex justify-between items-center mx-2">
                                                    <div className="flex space-x-3 justify-start">
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >Awards</p>
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >IoT</p>
                                                    </div>
                                                    <div className="text-gray-500" >
                                                        <p>
                                                            Feb 13, 2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <a href="/blogpage" className="text-lg md:text-xl px-2  lg:text-2xl font-semibold leading-tight tracking-tight  ">
                                                    His room, a proper human room although a little too small
                                                </a>
                                                <div className="text-sm md:text-md px-2 font-base ">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                            <div className=" " >
                                                <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                            </div>
                                            <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                                <div className="flex justify-between items-center mx-2">
                                                    <div className="flex space-x-3 justify-start">
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >Awards</p>
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >IoT</p>
                                                    </div>
                                                    <div className="text-gray-500" >
                                                        <p>
                                                            Feb 13, 2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <a href="/blogpage" className="text-lg md:text-xl px-2  lg:text-2xl font-semibold leading-tight tracking-tight  ">
                                                    His room, a proper human room although a little too small
                                                </a>
                                                <div className="text-sm md:text-md px-2 font-base ">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                            <div className=" " >
                                                <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                            </div>
                                            <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                                <div className="flex justify-between items-center mx-2">
                                                    <div className="flex space-x-3 justify-start">
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >Awards</p>
                                                        <p className="px-2 py-1 bg-indigo-400 rounded-xl text-xs font-bold text-white" >IoT</p>
                                                    </div>
                                                    <div className="text-gray-500" >
                                                        <p>
                                                            Feb 13, 2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <a href="/blogpage" className="text-lg md:text-xl px-2  lg:text-2xl font-semibold leading-tight tracking-tight  ">
                                                    His room, a proper human room although a little too small
                                                </a>
                                                <div className="text-sm md:text-md px-2 font-base ">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </>
                )
            }

        </main>
    );
};

export default Blog;
