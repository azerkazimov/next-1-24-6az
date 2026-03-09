import { Post } from "@/features/main/types/post";

export default async function ElectronicsDetail({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await response.json();

    if (!post) return <div>No post found</div>;
    
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 border p-4 rounded-md">
                <h1 className="text-2xl font-bold">Electronics Detail: {id}</h1>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm">{post.body}</p>
            </div>
        </div>
    )
}