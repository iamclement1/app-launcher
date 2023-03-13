import Image from "next/image";
import background from '../../assets/background.png';
import { AddApplication, Header, Sidebar } from "@/components";
import { appHome, homeCard } from "@/utils/appDashboard";
import { useState } from "react";
import { actionType } from "@/Redux/reducer";
import { useDispatch } from "react-redux";
import { useStateValue } from "@/Redux/StateProvider";


export default function Dashboard({children}) {
    const [filter, setFilter] = useState("All");
    const [isModal, setIsModal] = useState(false);

    // const [{ modalShow }, dispatch] = useStateValue();

    // if(!isOpenModal) {
    //     return null;
    // }

    // const showApp = () => {
    //     dispatch({
    //         type : actionType.SET_MODAL,
    //         modalShow : modalShow
    //     })

    //     // console.log('Hello, the card is clicked');

    // };
    return (
        <Sidebar>
            <div className="">


                <section className="w-full mt-12" id="services">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-6/6 h-9 flex items-center justify-center md:justify-center lg:justify-center
                    gap-10 py-6 overflow-x-scroll scrollbar-none bg-black/10 rounded-lg ">
                            {
                                appHome && appHome.map((category) => (
                                    <>
                                        <div className={`group 
                                            ${filter === category.name ? 'bg-[#FFCB03]/50' : ''}
                                            w-24 min-w-[120px] h-12 cursor-pointer rounded-lg drop-shadow-xl 
                                            flex flex-col gap-3 justify-center`}
                                            onClick={() => setFilter(category.name)}>
                                            <p className="text-white text-center description">
                                                {
                                                    category.name
                                                }
                                            </p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="flex justify-center items-center">

                    {/* card */}
                    <div className="w-5/6 h-4/5 grid grid-cols-4 gap-4 md:justify-center lg:justify-center
                            py-6 px-4 overflow-x-scroll scrollbar-none rounded-lg cursor-pointer"
                            onClick={() => setIsModal(true)}>
                        {
                            homeCard && homeCard.map((index) => (
                                <>
                                    <div key={index.id} className="
                            className='w-[125px] items-center shadow-md mb-4
                            bg-black/70 border border-[#ffffff1f]
                            rounded-md p-6 mt-4">
                                        <Image src={index.icon} alt="icon"
                                            className="w-10 h-10 bg-[#292727cf] px-3 py-2 rounded-sm" />

                                        <p className="text-white description text-md mt-7">
                                            {index.description}
                                        </p>
                                    </div>
                                </>
                            ))
                        }

                        <>
                        { isModal ? (
                            <>
                            <AddApplication />
                            </>
                        ) : null}
                        </>
                    </div>
                </section>
            </div>

        </Sidebar>
    )
}