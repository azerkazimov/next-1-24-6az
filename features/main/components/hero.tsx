"use client" // For Framer Motion => (CSR) = Client Side Rendering

import Scooter from "@/components/ui/scooter";
import Sphere from "@/components/ui/sphere";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");
    return(
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
            </div>
            <div className="col-span-1 relative">
                <motion.div
                    initial={{ transform: "translateX(200px)", scale: 0.8 }}
                    animate={{ transform: "translateX(0px)", scale: 1.2 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                >
                    <Scooter/>
                </motion.div>
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32"
                    initial={{ x: 280, y: -120, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <Sphere />
                </motion.div>
            </div>
        </div>
    )
}