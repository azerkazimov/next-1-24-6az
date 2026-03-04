import { Post } from "../pages/products/types/posts.type";

export default async function ProductsServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {data.map((post: Post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}