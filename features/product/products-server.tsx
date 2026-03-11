import { getTranslations } from "next-intl/server";
import { Material } from "../types/materials.type";

export default async function ProductsServer() {
    const response = await fetch("http://localhost:3000/api/products");
    const data: Material[] = await response.json();
    const t = await getTranslations("contact")

    return(
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center mb-12">{t("title")}</h1>
            <ul className="grid grid-cols-3 gap-4">
                {data.map((post: Material) => (
                    <li key={post.id} className="border p-4 rounded-md">
                        <h2 className="text-lg font-bold">{post.name}</h2>
                        <p className="text-sm">{post.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}