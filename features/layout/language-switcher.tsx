"use client"

import { Locale } from "@/i18n/locales";
import { useParams, usePathname, useRouter } from "next/navigation";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";



interface Language {
    name: string;
    value: string;
}

const languages: Language[] = [
    { name: "English", value: "en" },
    { name: "Azerbaijani", value: "az" },
]

export default function LanguageSwitcher() {
    const params = useParams();
    const locale = (params.locale as Locale) || "en";
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (lang: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${lang}`);
        router.replace(newPath);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">{locale.toUpperCase()}</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
                {languages.map((lang)=>(
                    <DropdownMenuItem key={lang.value} onClick={()=>handleLanguageChange(lang.value)}>
                        {lang.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}