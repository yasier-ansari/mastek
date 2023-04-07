import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { useState, useEffect } from "react";
import { blogPage } from "../assets";

const Port = () => {
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
        <main className=" max-w-7xl transition-all duration-1000 ease-out">
            {
                loading ? (<div className="flex justify-center items-center w-screen h-screen ">
                    <div class="loader"></div>
                </div>) : (
                    <>
                        <div className="px-10 py-8 md:pt-10 lg:pt-12 sm:px-20 md:px-32 lg:px-60 mx-auto ">
                            <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[24rem] lg:w-[45rem] ">
                                <img
                                    src={blogPage}
                                    loading="lazy"
                                    alt="work info"
                                    className="rounded-2xl mx-auto border-indigo-100 shadow-2xl drop-shadow-md border-2 h-40 sm:h-44 md:h-56 lg:h-[24rem] lg:w-[45rem] object-cover "
                                />
                            </div>
                            <div className=" mt-6 md:mt-8 lg:mt-10 lg:w-[90%] text-white font-semibold text-xs md:text-sm flex flex-wrap mx-auto flex-row justify-between items-center space-y-2 ">
                                <p className="  bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full px-2 py-1 h-max w-max "> Innovation </p>
                                <p className="  bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full px-2 py-1 h-max w-max "> Agile Method </p>
                                <p className="  bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full px-2 py-1 h-max w-max "> Marketing </p>
                                <p className="  bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full px-2 py-1 h-max w-max "> Machine Learning </p>
                            </div>
                        </div>
                        <div className="flex flex-col px-4 sm:px-6 md:px-32 lg:mb-12 lg:px-60 tracking-wide mx-auto mt-4">
                            <h2 className=" mt-3 font-extrabold font-dm text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
                                Demanding world of von Goethe and his extra terrestrial imagination
                            </h2>
                            <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto">
                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                            </p>
                            <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                            </p>
                            <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto">
                                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss                            </p>
                            <hr className="my-4 w-full h-[0.12rem] bg-gray-200" />
                            <div className="flex space-x-6 items-center">
                                <p>Share on : </p>
                                <div className="flex space-x-8 items-center">
                                    <a href="/" className="bg-indigo-700 rounded-full p-3 flex justify-center items-center h-10 w-10">
                                        < FaTwitter className=" fill-white" />
                                    </a>
                                    <a href="/" className="bg-indigo-700 rounded-full p-[0.9rem] flex justify-center items-center h-10 w-10">
                                        < FaFacebookF className="h-8 w-8 fill-white" />
                                    </a>
                                    <a href="/" className="bg-indigo-700 rounded-full p-3 flex justify-center items-center h-10 w-10">
                                        < FaLinkedinIn className="h-10 w-10 fill-white" />
                                    </a>
                                </div>
                            </div>
                            <hr className="my-4 w-full h-[0.1rem] bg-gray-200" />
                        </div>
                    </>
                )
            }
        </main>
    );
};

export default Port;
