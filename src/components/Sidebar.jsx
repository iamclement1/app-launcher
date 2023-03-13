import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { IoMdClose } from " react-icons/io";
import Logo from '../assets/Vectormtn.svg';
import Image from "next/image";
import { sideMenu } from "@/utils/appDashboard";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import background from '../assets/background.png';
import Link from "next/link";

export default function Sidebar({ children }, props) {
    const [title, setTitle] = useState()
    const [isOpen, setIsOpen] = useState(true) //set sidebar to open by default



    //getting location pathname
    const location = useRouter();

    useEffect(() => {
        switch (location.pathname) {
            case '/app/Dashboard': setTitle("Dashboard")
                break;
            case '/app/Applications': setTitle("Applications")
                break;
            case '/app/Setup': setTitle("Setup")
                break;
            default: setTitle("Dashboard")
                break;
        }
    }, [location, setTitle])
    return (
        <main className="h-screen w-full relative">

            {/* page background */}
            <Image src={background} alt="background" priority={true}
                unoptimized={true}
                className='w-full h-[950px] object-cover absolute mix-blend-overlay' />
            <div className="flex">
                <section className="fixed z-10">
                    <aside className="">
                        <div className="inset-0 overflow-hidden">
                            <div className="relative overflow-hidden">

                                {/* Desktop screen side bar menu */}

                                <div className="Sidebar">
                                    <div className={`h-screen bg-black/40
                                ${isOpen ? 'w-72' : 'w-20'} duration-200 
                                ease-in-out p-3 pt-32 hidden md:block text-black`}>
                                        {/* <div className="flex gap-x-4 items-center">
                                            <Image src={Logo} alt="brand-logo" />
                                        </div> */}

                                        {/* menu list  */}

                                        <ul className="p-0 menu-item SidebarList">
                                            {
                                                sideMenu && sideMenu.map((menu, index) => (
                                                    <>
                                                        <li
                                                            key={index.id} className={`text-black text-md flex items-center
                                                gap-x-4 cursor-pointer p-2 active
                                                hover:bg-[#FFCB03] hover:text-white rounded-md
                                                ${menu.gap ? 'mt-4' : 'mt-2'} `}
                                                            id={location.pathname === menu.link ? "active" : ""}
                                                            onClick={() => {
                                                                window.location.pathname = menu.link
                                                            }}>
                                                            <span className={` ${!isOpen && 'hidden'} origin-left
                                                        duration-200 text-[#999999] hover:text-white description `} activeclassname="active">
                                                                {menu.name}
                                                            </span>

                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                {/* mobile screen side bar menu */}

                                <div className={`h-screen bg-black/40 
                        ${isOpen ? 'w-72' : 'hidden'} p-3 pt-8 md:hidden
                        relative flex flex-col z-10 ease-in-out duration-200`}>
                                    <div className="flex gap-x-4 items-center">
                                        {/* <IoMdClose className={`text-3xl text-white`}
                                        onClick={() => setIsOpen(!isOpen)} /> */}
                                    </div>
                                    {/* mapped through side menus, set menu pathname when clicked */}
                                    <div className="p-0">
                                        {
                                            sideMenu && sideMenu.map((menu, index) => (
                                                <li key={index.id} className={`text-[#999999] text-sm flex items-center
                                        gap-x-6 cursor-pointer p-6 hover:bg-[#FFCB03]
                                        hover:text-white rounded-md
                                        ${menu.gap ? 'mt-4' : 'mt-2'}
                                        ${index === 0 && 'bg-[#FFCB03]'}`}
                                                    onClick={() => window.location.pathname = menu.link}>
                                                    <span className={` ${!isOpen && 'hidden'} origin-left
                                                        duration-200`} activeclassname="active">
                                                        {menu.title}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* main page container with props */}
                <section className="w-full">

                    {/* beginning of navbar/header */}

                    <nav className="w-full flex items-center justify-between px-5 py-3 bg-black/40 fixed z-10">
                        <Link href={'/'}>
                            <Image src={Logo} alt="alt" />
                        </Link>

                        {/* search input box */}
                        <div>
                            <input type="text" className="flex items-center justify-center border-[0.2px] transition duration-500 
                    placeholder-[#ffffff1f] focus:placeholder-transparent border-[#ffffff1f] w-[290px] 
                    px-8 py-2 bg-black/40 text-gray-50 rounded-full focus:outline-none description"
                                placeholder="Search" />
                            <RiSearch2Line className='tex-gray-200 text-[#ffffff4d] relative bottom-7 
                    left-60 ml-4 text-sm' />
                        </div>

                        {/* user dropdown */}
                        <div className="flex items-center space-x-4 mb-3">
                            <Link href={"/app"}>
                                <div className=" flex space-x-4 items-center bg-black/30 p-3
                            rounded-full text-gray-100 description cursor-pointer" type="button">
                                    <AiOutlinePlus />
                                    <p>Add application</p>
                                </div>
                            </Link>
                            <div className="flex items-center justify-center uppercase">
                                <p className=" flex items-center justify-center h-8 w-8 text-sm bg-[#396587] rounded-full cursor-pointer
                        text-white ">AC</p>
                                <AiOutlineDown className="cursor-pointer justify-center text-white" />
                            </div>
                        </div>
                    </nav>

                    {/* end of navbar/header ...... */}

                    {/* beginning of children props component */}
                    <div className="container-fluid">
                        <div className="w-full">
                            <div className={`col-md-12 py-20 relative `}>
                                <div className={` ${isOpen ? 'pl-72' : 'pl-14'} pl-0 md:pl-72 md:hidden duration-200 ease-in-out `}>
                                    {children}

                                </div>
                                {/* Desktop */}
                                <div className={` ${isOpen ? 'pl-72' : 'pl-14'} md:block hidden duration-200 ease-in-out `}>
                                    {children}

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}