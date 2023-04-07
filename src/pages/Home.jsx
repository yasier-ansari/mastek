import React, { useState, useEffect } from "react";
import { heroImg, service1, blog1, service2, service3, microsoft, google, meta, netflix } from "../assets";

import { RiSettingsLine, RiCheckLine, RiCheckFill } from 'react-icons/ri'
import { VscCheck } from "react-icons/vsc";
import AudioInput from "../component/Audio";
import { TextInput } from "../component";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const loadData = async () => {
        // Wait for two second
        await new Promise((r) => setTimeout(r, 2000));

        // Toggle loading state
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, [])
    return (
        <main className="py-6 md:py-10 lg:py-0  max-w-6xl mx-auto transition-all duration-1000 ease-out ">
            {
                loading ? (<div className="flex justify-center items-center h-screen w-full ">
                    <div class="loader"></div>
                </div>) : (
                    <>
                        <section id="hero" className="px-3 sm:px-6 md:px-10 lg:px-12  ">
                            <div className="flex flex-col md:flex-row space-y-8 sm:space-y-10 md:justify-between items-center">
                                <div className="flex-col space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-plus text-center md:text-start">
                                        Heading 1 with Lorem, ipsum dolor {" "}
                                        <span className="bg-gradient-to-tr text-transparent bg-clip-text from-blue-300 to-purple-600">
                                            capture
                                        </span>{" "}
                                    </h1>
                                    <h4 className="text-md sm:text-lg md:text-xl text-center md:text-start">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
                                    </h4>
                                </div>
                                <div className="px-4 py-6">
                                    <img
                                        src={heroImg}
                                        alt="hero image"
                                        className="shadow-purple-900/40 shadow-md drop-shadow-xl rounded-[1.6rem] border-[6px] border-white"
                                    />
                                </div>
                            </div>
                        </section>
                        <section id="work" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-6  lg:px-20 ">
                            <AudioInput />
                        </section>
                        <section id="work" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-6  lg:px-20 ">
                            <TextInput />
                        </section>
                        {/* <section id="work" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-6  lg:px-20 ">
                            <Text />
                        </section> */}
                        {/* <section id="work" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-6  lg:px-20 " >
                            <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12 items-center">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center font-plus my-2 " > Services </h2>
                                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12">
                                    <div className="flex justify-between space-x-8 px-4 sm:px-6 md:px-8 rounded-[1.2rem] py-4 sm:py-6 md:py-4">
                                        <div className="w-max  self-center " >
                                            <div className="p-4 bg-blue-300 rounded-2xl h-20 w-20" >
                                                <RiSettingsLine className="h-12 w-12 " />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-3 sm:py-4 md:py-6" >
                                            <h3 className="font-semibold text-lg md:text-xl" >Franz Kafka</h3>
                                            <p className="text-sm lg:text-base xl:text-lg" >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 px-4 sm:px-6 md:px-8 rounded-[1.2rem] py-4 sm:py-6 md:py-4">
                                        <div className="w-max  self-center " >
                                            <div className="p-4 bg-blue-300 rounded-2xl h-20 w-20" >
                                                <RiSettingsLine className="h-12 w-12 " />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-3 sm:py-4 md:py-6" >
                                            <h3 className="font-semibold text-lg md:text-xl" >Franz Kafka</h3>
                                            <p className="text-sm lg:text-base xl:text-lg" >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12">
                                    <div className="flex justify-between space-x-8 px-4 sm:px-6 md:px-8 rounded-[1.2rem] py-4 sm:py-6 md:py-4">
                                        <div className="w-max  self-center " >
                                            <div className="p-4 bg-blue-300 rounded-2xl h-20 w-20" >
                                                <RiSettingsLine className="h-12 w-12 " />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-3 sm:py-4 md:py-6" >
                                            <h3 className="font-semibold text-lg md:text-xl" >Franz Kafka</h3>
                                            <p className="text-sm lg:text-base xl:text-lg" >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 px-4 sm:px-6 md:px-8 rounded-[1.2rem] py-4 sm:py-6 md:py-4">
                                        <div className="w-max  self-center " >
                                            <div className="p-4 bg-blue-300 rounded-2xl h-20 w-20" >
                                                <RiSettingsLine className="h-12 w-12 " />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-3 sm:py-4 md:py-6" >
                                            <h3 className="font-semibold text-lg md:text-xl" >Franz Kafka</h3>
                                            <p className="text-sm lg:text-base xl:text-lg" >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                        <section id="service" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-16 lg:px-20 ">
                            <div className=" mx-auto">
                                <div className="my-10 md:my-16 lg:my-20" >
                                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center font-plus my-2 " > Heading 2 goes here </h2>
                                    <h5 className="text-center text-lg md:text-xl " >The European languages are members of the same family.  </h5>
                                </div>
                                <div className="flex flex-col space-y-20 md:space-y-24 lg:space-y-32 mx-auto">
                                    <div className="flex flex-col lg:flex-row space-y-6 md:space-y-8 lg:justify-between lg:space-y-0 items-center max-h-[35rem] md:max-h-[45rem] lg:[50rem]">
                                        <div className=" h-80 aspect-square  lg:basis-[40%] overflow-hidden" >
                                            <img src={service1} className="object-cover rounded-[1rem] shadow-xl drop-shadow-xl shadow-blue-900/30" />
                                        </div>
                                        <div className="lg:basis-[50%]" >
                                            <h3 className="font-bold font-plus text-xl md:text-2xl text-center md:text-start lg:text-3xl my-2 ">Von Goethe</h3>
                                            <h5 className="text-md md:text-lg  text-center md:text-start" >The languages only differ in their grammar, their pronunciation and their most common words.</h5>
                                            <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 flex flex-col space-y-3 md:space-y-4 lg:space-y-6">
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        User Specific Dashboards
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        AutoML Forecasting
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        Data Management Layer
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        User Specific Dashboards
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row space-y-6 md:space-y-8 lg:justify-between lg:space-y-0 items-center max-h-[35rem] md:max-h-[45rem] lg:[50rem]">
                                        <div className=" h-80 aspect-square  lg:basis-[40%] overflow-hidden" >
                                            <img src={service2} className="object-cover rounded-[1rem] shadow-xl drop-shadow-xl shadow-blue-900/30" />
                                        </div>
                                        <div className="lg:basis-[50%]" >
                                            <h3 className="font-bold font-plus text-xl md:text-2xl text-center md:text-start lg:text-3xl my-2 ">Von Goethe</h3>
                                            <h5 className="text-md md:text-md lg:text-lg text-center md:text-start" >The languages only differ in their grammar, their pronunciation and their most common words.</h5>
                                            <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 flex flex-col space-y-3 md:space-y-4 lg:space-y-6">
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        User Specific Dashboards
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        AutoML Forecasting
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        Data Management Layer
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        User Specific Dashboards
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row space-y-6 md:space-y-8 lg:justify-between lg:space-y-0 items-center max-h-[35rem] md:max-h-[45rem] lg:[50rem]">
                                        <div className=" h-80 aspect-square  lg:basis-[40%] overflow-hidden" >
                                            <img src={service3} className="object-cover rounded-[1rem] shadow-xl drop-shadow-xl shadow-blue-900/30" />
                                        </div>
                                        <div className="lg:basis-[50%]" >
                                            <h3 className="font-bold font-plus text-xl md:text-2xl text-center md:text-start lg:text-3xl my-2 ">Von Goethe</h3>
                                            <h5 className="text-md md:text-lg  text-center md:text-start" >The languages only differ in their grammar, their pronunciation and their most common words.</h5>
                                            <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 flex flex-col space-y-3 md:space-y-4 lg:space-y-6">
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        User Specific Dashboards
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        AutoML Forecasting
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        Data Management Layer
                                                    </div>
                                                </div>
                                                <div className="flex space-x-4 justify-start items-center">
                                                    <div className="bg-blue-100/60 rounded-full h-max w-max p-2" >
                                                        <VscCheck className="h-4 w-4 stroke-1" />
                                                    </div>
                                                    <div>
                                                        User Specific Dashboards
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section id="partner" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-16 lg:px-20" >
                            <div>
                                <h2 className="text-xl  my-8 md:my-10 lg:my-16 sm:text-2xl md:text-3xl lg:text-4xl font-black font-plus text-center" >Trusted By</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 md:justify-between gap-6 md-px-6 lg:px-8">
                                <div className="flex mx-auto p-3 md:p-4 lg:p-6 h-12 sm:h-16 md:h-24 lg:h-32 overflow-hidden ">
                                    <img src={google} className="object-contain" />
                                </div>
                                <div className="flex mx-auto p-3 md:p-4 lg:p-6 h-12 sm:h-16 md:h-24 lg:h-32 overflow-hidden ">
                                    <img src={meta} className="object-contain" />
                                </div>
                                <div className="flex mx-auto p-3 md:p-4 lg:p-6 h-12 sm:h-16 md:h-24 lg:h-32 overflow-hidden ">
                                    <img src={netflix} className="object-contain" />
                                </div>
                                <div className="flex mx-auto p-3 md:p-4 lg:p-6 h-12 sm:h-16 md:h-24 lg:h-32 overflow-hidden ">
                                    <img src={microsoft} className="object-contain " />
                                </div>
                            </div>
                        </section>
                        <section id="blog" className="my-12 md:my-16 lg:my-20 px-3 sm:px-4 md:px-16 lg:px-20">
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center font-plus my-6 md:mb-10 lg:mb-12 " > Latest from us </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap mx-auto items-center gap-y-6 md:gap-y-0 md:gap-x-12">
                                    <div className="flex flex-col space-y-0   rounded-xl border shadow-sm drop-shadow-2xl shadow-gray-600">
                                        <div className=" " >
                                            <img src={blog1} alt="" className="rounded-t-xl   object-cover" />
                                        </div>
                                        <div className="flex flex-col py-3 px-2 text-xs md:text-sm lg:text-md md:py-4 md:px-3 space-y-4 md:space-y-6 ">
                                            <div className="flex justify-between items-center mx-2">
                                                <div className="flex space-x-3 justify-start">
                                                    <p className="px-2 py-1 bg-indigo-300/80 rounded-xl text-xs font-medium" >Awards</p>
                                                    <p className="px-2 py-1 bg-indigo-300/80 rounded-xl text-xs font-medium" >IoT</p>
                                                </div>
                                                <div className="text-gray-500" >
                                                    <p>
                                                        Feb 13, 2023
                                                    </p>
                                                </div>
                                            </div>
                                            <a href='/blogpage' className="text-lg md:text-xl px-2  lg:text-2xl leading-snug font-semibold ">
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
                                                    <p className="px-2 py-1 bg-indigo-300/80 rounded-xl text-xs font-medium" >Awards</p>
                                                    <p className="px-2 py-1 bg-indigo-300/80 rounded-xl text-xs font-medium" >IoT</p>
                                                </div>
                                                <div className="text-gray-500" >
                                                    <p>
                                                        Feb 13, 2023
                                                    </p>
                                                </div>
                                            </div>
                                            <a href='/blogpage' className="text-lg md:text-xl px-2  lg:text-2xl leading-snug font-semibold ">
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
                                                    <p className="px-2 py-1 bg-indigo-300/80 rounded-xl text-xs font-medium" >Awards</p>
                                                    <p className="px-2 py-1 bg-indigo-300/80 rounded-xl text-xs font-medium" >IoT</p>
                                                </div>
                                                <div className="text-gray-500" >
                                                    <p>
                                                        Feb 13, 2023
                                                    </p>
                                                </div>
                                            </div>
                                            <a href='/blogpage' className="text-lg md:text-xl px-2  lg:text-2xl leading-snug font-semibold ">
                                                His room, a proper human room although a little too small
                                            </a>
                                            <div className="text-sm md:text-md px-2 font-base ">
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
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

export default Home;
