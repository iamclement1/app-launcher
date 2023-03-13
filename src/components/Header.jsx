import Image from "next/image";
import Logo from '../assets/Vectormtn.svg';
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";

export default function Header() {
    return (
        <>
            <main className="w-full flex items-center justify-between px-5 py-3 bg-black/10">
                <Image src={Logo} alt="alt" />
                <div className="flex items-center justify-center space-x-6">
                    <div>
                        <input type="text" className="flex items-center justify-center border-[0.2px] transition duration-500 
                    placeholder-[#ffffff1f] focus:placeholder-transparent border-[#ffffff1f] w-[280px] 
                    px-8 py-2 bg-black/40 text-gray-50 rounded-full focus:outline-none description"
                            placeholder="Search" />
                        <RiSearch2Line className='tex-gray-200 text-[#ffffff4d] relative bottom-7 
                    left-60 ml-4 text-sm' />
                    </div>
                    <div className="flex items-center space-x-2 mb-3">  
                        <div>
                            <p className="flex items-center justify-center 
                        uppercase h-8 w-8 text-sm bg-[#396587] rounded-full cursor-pointer
                        text-white ">AC</p>
                            <AiOutlineDown className="cursor-pointer justify-center text-white" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}