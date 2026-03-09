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
    return(
        <DropdownMenu>
            
        </DropdownMenu>
    )
}