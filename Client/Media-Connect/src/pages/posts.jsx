import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [title, setCount] = useState("");

    const loadPosts = async () => {
            const response = await api.get("/posts");
            setPosts(response.data);
    };

    const createPost = async () => {
        await api.post("/posts", { title });
        setCount("");
        loadPosts();
    };

    const removePost = async (id) => {
        await api.delete(`/posts/${id}`);
        loadPosts();
    };
    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
                <input value={title} onChange={(e) => setCount(e.target.value)} placeholder="Post Title" className="border p-2 mr-2" />
                <button onClick={createPost} className="bg-blue-500 text-white px-4 py-2 rounded">Create Post</button>
            
            {posts.map((post) => (
                <div key={post._id} className="border p-4 my-2">
                    <h3 className="text-xl font-semibold">{post.title}</h3> 
                    <button onClick={() => removePost(post._id)} className="bg-red-500 text-white px-2 py-1 rounded mt-2">Delete</button>
                </div>
            ))}
        </div>
    );
}