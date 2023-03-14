import { useStateValue } from "@/Redux/StateProvider";
import { actionType } from "@/Redux/reducer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiRightArrowAlt } from 'react-icons/bi';
import { FiArrowUpRight } from 'react-icons/fi'
import AppImage from '../../assets/card.jpg'
import Swiper from "swiper";
import 'swiper/css';
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";


export default function AddApplication() {
    // const [{ modalShow }, dispatch] = useStateValue();
    const [isModal, setIsModal] = useState(false);

    // const closeModal = () => {
    //     dispatch({
    //         type: actionType.SET_MODAL,
    //         modalShow : !modalShow,
    //     });
    // };

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="fixed top-0 right-0 w-full md:w-375 h-screen bg-black drop-shadow-md
        flex flex-col z-[101] overflow-y-scroll scrollbar-none">
            <div className="w-full flex items-center justify-between px-8 py-2 cursor-default ">
                <div className="description text-white">
                    <h1>Data Management System</h1>

                </div>
                <div className="w-6 h-6 rounded-full bg-gray-300
                flex items-center justify-center text-black font-semibold">
                    <AiOutlineClose className="cursor-pointer font-bold"
                        onClick={() => setIsModal(false)} />
                </div>
            </div>

            {/* application version */}
            <div className="text-gray-300 px-8 py-2 light-font text-sm">
                <span>Version 1.0.1</span>
            </div>

            {/* update and launch application */}
            <div className="flex items-center justify-between px-8 py-2">

                {/* update application */}
                <Link href={"/app/UpdateApplication"}>
                    <div className="flex space-x-3">
                        <h1 className="text-white text-xs description">
                            Update application
                        </h1>
                        <div className="w-4 h-4 bg-[#FFCB03] text-black rounded-full flex items-center
                    justify-between ">
                            <BiRightArrowAlt />
                        </div>
                    </div>
                </Link>

                {/* Launch application */}
                <Link href={'/app/Dashboard'}>
                    <div className="flex space-x-3">
                        <h1 className="text-white text-xs description">
                            Launch application
                        </h1>
                        <div className="w-4 h-4 bg-[#FFCB03] text-black rounded-full flex items-center
                    justify-between">
                            <FiArrowUpRight className="" />
                        </div>
                    </div>
                </Link>
            </div>


            <div className="px-8 py-2">
                <hr />
            </div>

            {/* application image */}

            {/* <div className="px-8 py-2 w-375">
                <Image src={AppImage} alt="card_image" />
            </div> */}


            {/* about application */}
            <div className="px-8 py-2">
                <p className="text-gray-200 text-sm description">
                    Highlight or right-click on a section of text and click on Translate icon next to it to translate it to your language. Or, to translate the entire page you are visiting, click the translate icon on the browser toolbar.
                </p>

                {/* Technolgies used container */}
                {/* <div className="despcription py-2">
                    <h1 className="text-gray-200 text-md font-bold">
                        Technologies Used
                    </h1>
                    <p className="text-gray-500 text-xs font-semibold">
                        Typescript, LaravelPHP, MongoDB
                    </p>
                </div> */}

                {/* versions container */}
                {/* <div className="despcription">
                    <h1 className="text-gray-200 text-md font-bold">
                        Version 1.0.1
                    </h1>
                    <p className="text-gray-300 text-md font-semibold">
                        Released Feb 12, 2023
                    </p>
                    <p className="text-sm description text-gray-400 mt-2">
                        UPDATE (v.2.0): Now you can highlight or right-click a text and translate it vs. translate the entire page. You can also change extension options to automatically show translation every time you highlight text.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam reiciendis illum eum libero, dolor aut ea facere quam excepturi ut mollitia. Vitae, delectus!
                    </p>
                </div> */}
            </div>
        </motion.div>
    )
}