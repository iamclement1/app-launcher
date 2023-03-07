import Image from "next/image";
import background from '../../assets/cheerful-lady.png';
import { Header } from "@/components";
import { appHome, homeCard } from "@/utils/appDashboard";
import { useState } from "react";

export default function Dashboard() {
    const [filter, setFilter] = useState("All");
    return (
        <>
            <main className="h-screen w-full relative ">
                <Image src={background} alt="background" priority={true}
                    unoptimized={true}
                    className='w-full h-[850px] object-cover absolute mix-blend-overlay' />

                <div className="bg-black/80 h-auto w-full absolute">
                    <Header />

                    <section className="w-full my-6" id="services">
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="w-4/6 h-9 flex items-center justify-start md:justify-center lg:justify-center
                    gap-8 py-6 overflow-x-scroll scrollbar-none bg-black/90 rounded-lg fixed mt-12">
                                {
                                    appHome && appHome.map((category) => (
                                        <>
                                            <div className={`group 
                                            ${filter === category.name ? 'bg-[#FFCB03]/50' : 'bg-black/70'}
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
                        <div className="w-4/6 h-4/5 grid grid-cols-4 gap-4 md:justify-center lg:justify-center
                            py-6 px-4 overflow-x-scroll scrollbar-none rounded-lg mt-12">
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
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}