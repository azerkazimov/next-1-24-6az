"use client" // For Framer Motion => (CSR) = Client Side Rendering

import Scooter from "@/components/ui/scooter";
import { motion } from "framer-motion";

export default function Hero() {
    return(
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <h1 className="text-4xl font-bold">FUTURE</h1>
            </div>
            <div className="col-span-1">
                <motion.div
                    initial={{ transform: "translateX(200px)", scale: 0.8 }}
                    animate={{ transform: "translateX(0px)", scale: 1.2 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                >
                    <Scooter/>
                </motion.div>

            </div>
        </div>
    )
}