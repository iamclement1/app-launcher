import Image from "next/image";
import background from '../../assets/cheerful-lady.png';
import { Header } from "@/components";
import { appHome } from "@/utils/appDashboard";
import { useState } from "react";

export default function Dashboard() {
    const [filter, setFilter] = useState("All");
    return (
        <>
            <main className="h-screen w-full relative ">
                <Image src={background} alt="background" priority={true}
                    unoptimized={true}
                    className='w-full h-screen object-cover absolute mix-blend-overlay' />

                <div className="bg-black/80 h-screen w-full absolute">
                    <Header />

                    <section className="w-full my-6" id="services">
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="w-full flex items-center justify-start md:justify-center lg:justify-center
                    gap-8 py-6 overflow-x-scroll scrollbar-none">
                                {
                                    appHome && appHome.map((category) => (
                                        <>
                                            <div className={`group 
                                            ${filter === category.name ? 'bg-[#FFCB03]/50' : 'bg-black/70'}
                                            w-24 min-w-[120px] h-12 cursor-pointer rounded-lg drop-shadow-xl 
                                            flex flex-col gap-3 justify-center`}>
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
                </div>
            </main>
        </>
    )
}