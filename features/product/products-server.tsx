import { getTranslations } from "next-intl/server";
import { Post } from "../pages/products/types/posts.type";

export default async function ProductsServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const t = await getTranslations("contact")

    return(
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center mb-12">{t("title")}</h1>
            <ul className="grid grid-cols-3 gap-4">
                {data.map((post: Post) => (
                    <li key={post.id} className="border p-4 rounded-md">
                        <h2 className="text-lg font-bold">{post.title}</h2>
                        <p className="text-sm">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}