import { Post } from "@/features/pages/products/types/posts.type";

export default async function ProductsPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =  await response.json();
 
    return (
        <div>
            <h1>Products</h1>
            {
                data.map((item: Post) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))
            }
        </div>
    )
}