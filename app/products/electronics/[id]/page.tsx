"use client"
import { Post } from "@/features/main/types/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ElectronicsDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
        }
        fetchData();
    }, [])

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