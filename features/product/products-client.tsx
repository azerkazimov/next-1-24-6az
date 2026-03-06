"use client" // to use the useEffect hook & useState hook (client side rendering => CSR)

import { Post } from "@/features/pages/products/types/posts.type";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsClient() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!response.ok)
          return console.error("Failed to fetch data:", response.statusText);
        const data = await response.json();
        console.log(data);

        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-4 gap-4">

        {posts.map((item: Post) => (

          <Link key={item.id} href={`/products/electronics/${item.id}`} className="bg-gray-100 p-4 rounded-md">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}