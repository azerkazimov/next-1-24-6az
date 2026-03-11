import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NAV_MENU_KEYS } from "@/lib/nav-menu";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function MobileNav() {
    const t = useTranslations("navbar.menu");

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col items-center gap-12">
                    {NAV_MENU_KEYS.map((key) => (
                        <Button variant="outline" className="w-full" key={key} asChild>
                            <Link href={t(`${key}.href`)} className="text-lg font-medium hover:font-bold duration-300 transition-all">
                                {t(`${key}.title`)}
                            </Link>
                        </Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
