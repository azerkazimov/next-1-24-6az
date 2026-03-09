import Map from "@/features/pages/contact/components/map";
import ProductsServer from "@/features/product/products-server";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("contact")
    return (
        <div className="container mx-auto">
            <ProductsServer />
            <div className="flex flex-1 my-12 items-center">

                <Map />
                <div className="flex flex-col gap-4 px-12">
                    <h2 className="text-2xl font-bold">{t("title")}</h2>
                    <p className="text-sm">{t("description")}</p>
                    <p className="text-sm">{t("phone")}</p>
                    <p className="text-sm">{t("address")}</p>
                </div>
            </div>

        </div>
    )
}