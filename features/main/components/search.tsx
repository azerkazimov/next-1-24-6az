"use client";
import { useMobile } from "@/features/hooks/use-mobile";

export default function Search() {
    const isMobile = useMobile();

    if (isMobile) {
        return (
            <div className=" ">
                
            </div>
        )
    }

    return (
        <div className="flex flex-col fixed top-0 right-0 min-h-screen border z-50 max-w-[96px]">
            <div className="flex-1 bg-linear-to-b from-[#9AE0D3] to-[#35A7A0] h-full w-full flex justify-center items-center">
                <div className="flex flex-col trasform rotate-90 h-full ">
                    <span className="text-white text-md uppercase tracking-[10px] w-[400px] text-center">The Concept</span>
                </div>
            </div>
            <div className="flex-1 bg-linear-to-b from-[#89C8DD] to-[#73ADC1] h-full flex justify-center items-center">
                <div className="flex flex-col trasform rotate-90 h-full w-full justify-center items-center ">
                    <span className="text-white text-md uppercase tracking-[10px] w-[400px] text-center">ELECTRIC - B</span>
                </div>
            </div>

        </div>
    )
}