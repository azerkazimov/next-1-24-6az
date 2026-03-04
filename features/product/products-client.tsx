"use client" // to use the useEffect hook & useState hook (client side rendering => CSR)

import { Post } from "@/features/pages/products/types/posts.type";
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
        {posts.map((item: Post) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }