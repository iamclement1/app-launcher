import { useStateValue } from "@/Redux/StateProvider";
import { actionType } from "@/Redux/reducer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiRightArrowAlt } from 'react-icons/bi';
import { FiArrowUpRight } from 'react-icons/fi'

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
        <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-black/90 drop-shadow-md
        flex flex-col z-[101]">
            <div className="w-full flex items-center justify-between p-4 cursor-default ">
                <div className="description text-white">
                    <h1>Data Management System</h1>

                </div>
                <div className="w-6 h-6 rounded-full bg-gray-300
                flex items-center justify-center text-black font-semibold"
                    onClick={() => setIsModal(false)}>
                    <AiOutlineClose className="cursor-pointer font-bold" />
                </div>
            </div>

            {/* application version */}
            <div className="text-gray-300 px-4 light-font text-sm">
                <span>Version 1.0.1</span>
            </div>

            {/* update and launch application */}
            <div className="flex items-center justify-between p-4">

                {/* update application */}
                <div className="flex space-x-3">
                    <h1 className="text-white text-xs description">
                        Update application
                    </h1>
                    <div className="w-4 h-4 bg-[#FFCB03] text-black rounded-full flex items-center
                    justify-between ">
                        <BiRightArrowAlt />
                    </div>
                </div>

                {/* Launch application */}
                <div className="flex space-x-3">
                    <h1 className="text-white text-xs description">
                        Launch application
                    </h1>
                    <div className="w-4 h-4 bg-[#FFCB03] text-black rounded-full flex items-center
                    justify-between">
                        <FiArrowUpRight className="" />
                    </div>
                </div>

            </div>
        </div>
    )
}