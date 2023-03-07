import { useState } from "react";
import Image from "next/image";
import background from '../../assets/lady.svg'
import Logo from '../../assets/Vectormtn.svg'
import { AiOutlineDown } from 'react-icons/ai'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { SlCalender } from 'react-icons/sl'
import Link from "next/link";
import { FaArrowRight, FaFileUpload } from "react-icons/fa";

export default function Index() {
    const [startDate, setStartDate] = useState(new Date());

    const uploadImage = (e) => {

    }
    
    return (
        <>
            <main className="flex">
                <div className="bg-black w-full h-320px">
                    <div className="flex items-center justify-between px-8 py-3 bg-[#333333] ">
                        <Link href={'/'} >
                            <Image src={Logo} alt="logo" width={50} height={50}
                                className="w-10 h-10 cursor-pointer" />
                        </Link>
                        <div className="flex items-center space-x-2">
                            <p className="flex items-center justify-center 
                        uppercase h-8 w-8 text-sm bg-[#396587] rounded-full cursor-pointer
                        text-white ">AC</p>
                            <AiOutlineDown className="cursor-pointer justify-center text-white" />
                        </div>
                    </div>

                    <div className="mx-36 mt-8 w-4/6 p-3 ">
                        <h2 className="text-[#FFCB03] text-sm description">
                            Application details
                        </h2>
                        <h1 className="text-2xl header lg:w-3/6 text-white">
                            Add your solutions to the application launcher
                        </h1>

                        <div className="md:flex space-x-8 text-sm mt-5">
                            <form action="">
                                {/* application name */}
                                <div>
                                    <label htmlFor="name"></label>
                                    <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[320px] 
                                px-5 py-2 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                        placeholder="Application name" />
                                </div>
                                <div>
                                    {/* application description text area */}
                                    <textarea name="comment" id="" cols="15" rows="5"
                                        className="placeholder-[#666666] focus:placeholder-transparent 
                                border-[#ffffff1f] w-[320px] 
                                    px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md 
                                    focus:outline-none text-xs description"
                                        placeholder="include a short description of your application"></textarea>
                                </div>

                                <div>
                                    {/* contributors */}
                                    <label htmlFor="contributors"></label>
                                    <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[320px] 
                                px-5 py-2 mt-2 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                        placeholder="Contributors" />
                                </div>

                                <div>
                                    {/* technologies used */}
                                    <label htmlFor="technologies"></label>
                                    <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[320px] 
                                px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                        placeholder="Technologies used" />
                                </div>

                                <div className="flex space-x-5 mb-0">
                                    <div>
                                        <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[140px] 
                                px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                            placeholder="Version" />
                                    </div>
                                    <div>
                                        <DatePicker
                                            selected={startDate} onChange={(date) => setStartDate(date)}
                                            className="border-[0.2px] transition duration-500 
                                    placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[160px] 
                                            px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"/>
                                        <SlCalender className="relative bottom-7 left-32" />

                                    </div>
                                </div>

                                <div>
                                    {/* url or link  */}
                                    <label htmlFor="url"></label>
                                    <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[320px] 
                                px-5 py-2 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                        placeholder="Add link or URL" />
                                </div>


                                <Link href="/login">
                                    <div className="flex items-center space-x-12 bg-[#FFCB03] w-[190px] rounded-full mt-6">
                                        <button className=" py-3 px-3 text-xs description cursor-pointer text-black">
                                            Add application
                                        </button>
                                        <FaArrowRight className="flex items-center  justify-center 
                            text-xl h-5 w-5 p-1.5 text-white bg-black rounded-full" />
                                    </div>
                                </Link>
                            </form>

                            {/* upload app icon */}
                            <div className="md:my-0 my-6">
                                <div>
                                    <h2 className="description text-[#999999]">
                                        Add app icon
                                    </h2>
                                    {/* add product icon */}
                                    <label className="w-5/6 h-36 flex flex-col items-center justify-between cursor-pointer
                            border border-[#ffffff1f] border-dashed bg-[#5e44443a] rounded-md">
                                        <div className="w-full h-full flex flex-row items-center justify-center gap-2">
                                            <FaFileUpload className="text-gray-500 text-xl hover:text-gray-300
                                    " />
                                            <p className="text-gray-300 hover:text-gray-400 text-xs w-4/6
                                    my-5">
                                                Drag and drop here or <span className="underline">click</span> to upload.

                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            name="uploadimage"
                                            accept="image/*"
                                            onChange={uploadImage}
                                            className="w-0 h-0"
                                        />
                                    </label>

                                </div>

                                <div>
                                    {/* add product icon */}
                                    <h2 className="description text-[#999999] mt-3">
                                        Add images
                                    </h2>
                                    <label className="w-5/6 h-36 flex flex-col items-center justify-between cursor-pointer
                            border border-[#ffffff1f] border-dashed bg-[#5e44443a] rounded-md">
                                        <div className="w-full h-full flex flex-row items-center justify-center gap-2">
                                            <FaFileUpload className="text-gray-500 text-xl hover:text-gray-300
                                    " />
                                            <p className="text-gray-300 hover:text-gray-400 text-xs w-4/6
                                    my-5">
                                                Drag and drop here or <span className="underline">click</span> to upload.

                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            name="uploadimage"
                                            accept="image/*"
                                            onChange={uploadImage}
                                            className="w-0 h-0"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full">
                    <Image src={background} alt="background"
                    />
                </div>
            </main>
        </>
    )
}