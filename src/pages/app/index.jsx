import Image from "next/image";
import background from '../../assets/cheerful-lady.png'
import Logo from '../../assets/Vectormtn.svg'
import { AiOutlineDown } from 'react-icons/ai'
export default function Index() {
    return (
        <>
            <main className="h-screen w-full relative">
                <Image src={background} alt=" background"
                    priority={true} unoptimized={true}
                    className="w-full h-880 bg-black
                    mix-blend-overlay" />
            </main>

            <div className="bg-black lg:w-3/6 w-full h-screen absolute top-0 text-white">
                <div className="flex items-center justify-between bg-[#333333] p-4 ">
                    <Image src={Logo} alt="logo" width={50} height={50}
                        className="w-15 h-15" />
                    <div className="flex items-center space-x-2">
                        <p className="flex items-center justify-center 
                        uppercase h-10 w-10 bg-[#396587] rounded-full cursor-pointer ">AC</p>
                        <AiOutlineDown className="cursor-pointer justify-center" />
                    </div>
                </div>

                <div className="px-8 mt-8">
                    <h2 className="text-[#FFCB03] text-sm description">
                        Application details
                    </h2>
                    <h1 className="text-2xl header w-3/6">
                        Add your solutions to the application launcher
                    </h1>

                    <div className="flex mt-5">
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
                                px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
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

                            <div className="flex">
                                <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[320px] 
                                px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                    placeholder="Version" />
                            </div>

                            <div>
                                {/* url or link  */}
                                <label htmlFor="url"></label>
                                <input type="text" className="border-[0.2px] transition duration-500 
                        placeholder-[#666666] focus:placeholder-transparent border-[#ffffff1f] w-[320px] 
                                px-5 py-2 mt-3 bg-[#212121] text-gray-50 rounded-md focus:outline-none text-sm description"
                                    placeholder="Add link or URL" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}