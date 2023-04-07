import { contMain, heroImg } from "../assets"
import { useState, useEffect } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', company_name: '', c_number: '', message: '' })
    const handleChange = (e) => {
        console.log(form)
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        {/*code */ }
    }
    const style = {
        backgroundImage: `url(${contMain})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
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

    return (
        <main className=" mx-auto">
            {
                loading ? (<div className="flex justify-center items-center h-screen w-screen ">
                    <div class="loader"></div>
                </div>) : (
                    <>
                        <section id="hero" className="max-w-full" style={style}>
                            <div className="max-w-7xl px-3 sm:px-6 md:px-10 lg:px-12 text-white mx-auto flex flex-col md:flex-row space-y-8 sm:space-y-10 md:justify-between items-center">
                                <div className="py-16 md:py-20 lg:py-28 max-w-2xl flex-col space-y-6 sm:space-y-8 md:space-y-12">
                                    <h1 className="text-2xl max-w-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-plus text-center md:text-start">
                                        Let us get in {" "}
                                        <span className="bg-gradient-to-tr text-transparent bg-clip-text from-blue-400 to-violet-400">
                                            Touch
                                        </span>{" "}


                                    </h1>
                                    <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl text-center md:text-start">
                                        The Big Oxmox advised her not to do so, because there were thousands of bad Commas & wild Question Marks
                                    </h4>
                                </div>
                            </div>
                        </section>
                        <section id="links" className="bg-gray-100 px-3 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto ">
                            <div className="flex justify-center space-x-20 md:space-x-28 lg:space-x-40 py-8 md:py-12  items-center">
                                <div>
                                    <h2 className="text-xl text-center font-semibold font-plus md:text-2xl xl:text-3xl" >Sales</h2>
                                    <p className="md:text-lg text-indigo-800 font-medium " >sales@start</p>
                                </div>
                                <div>
                                    <h2 className="text-xl text-center font-semibold font-plus md:text-2xl xl:text-3xl" >Support</h2>
                                    <p className="md:text-lg text-indigo-800 font-medium " >support@start</p>
                                </div>
                            </div>
                        </section>
                        <section id="form" className="sm:px-6 md:px-10 lg:px-12">
                            <form action="" className="flex  flex-col py-4 md:py-6 lg:py-8 mx-auto space-y-4 md:space-y-6 lg:space-y-8 w-[90%] md:w-[80%] lg:w-[50%] max-w-7xl ">
                                <div className="flex flex-col space-y-6 md:justify-between md:flex-row md:space-y-0 ">
                                    <div className="flex flex-col space-y-2 md:space-y-3 md:basis-[45%] ">
                                        <label htmlFor="Name" className="ml-1">Name</label>
                                        <input type="text" onChange={handleChange} name="name" value={form.name} className=" w-full px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-md border border-black/20 outline-none bg-gray-100 focus:border-gray-400 focus:shadow-md transition-all duration-150 ease-in-out " />
                                    </div>
                                    <div className="flex flex-col space-y-2 md:space-y-3 md:basis-[45%] ">
                                        <label htmlFor="Name" className="ml-1">Email</label>
                                        <input type="text" onChange={handleChange} name="email" value={form.email} className=" w-full px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-md border border-black/20 outline-none bg-gray-100 focus:border-gray-400 focus:shadow-md transition-all duration-150 ease-in-out " />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-6 md:justify-between md:flex-row md:space-y-0 ">
                                    <div className="flex flex-col space-y-2 md:space-y-3 md:basis-[45%] ">
                                        <label htmlFor="Name" className="ml-1" >Company Name</label>
                                        <input type="text" onChange={handleChange} name="company_name" value={form.company_name} className="px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-md border border-black/20 outline-none bg-gray-100 focus:border-gray-400 focus:shadow-md transition-all duration-150 ease-in-out " />
                                    </div>
                                    <div className="flex flex-col space-y-2 md:space-y-3 md:basis-[45%] ">
                                        <label htmlFor="Name" className="ml-1" >Contact Number</label>
                                        <input type="text" onChange={handleChange} name="c_number" value={form.c_number} className="px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-md border border-black/20 outline-none bg-gray-100 focus:border-gray-400 focus:shadow-md transition-all duration-150 ease-in-out " />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 justify-center w-full ">
                                    <label htmlFor="message" className="ml-1">message</label>
                                    <textarea type="text" onChange={handleChange} name="message" value={form.message} className=" rounded-lg border border-black/20 bg-gray-100 outline-none focus:outline-none h-52 w-full px-3 py-2 md:px-4 md:py-3 resize-none "  ></textarea>
                                </div>
                                <div className="flex justify-center md:justify-start items-center">
                                    <button onClick={(e) => { handleSubmit }} className=" px-2 py-1 md:px-3 lg:px-4 lg:py-2 bg-indigo-500 text-white font-bold rounded-xl">
                                        Submit Query
                                    </button>
                                </div>
                            </form>
                        </section>
                    </>
                )
            }

        </main>
    )
}

export default Contact