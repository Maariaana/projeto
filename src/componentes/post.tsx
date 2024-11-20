'use client'

import Image from "next/image";

interface Post {
    id: number;
    title: string;
    content: string;
}

export default function Post({post}: any) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image src={post.image} alt={post.title} width={800} height={450} />
            <div className="p-6">
                <h2 className="text-2xl">{post.content}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center justify-btween text-sm text-gray-500">
                    <span>Autor: {post.author}</span>
                    <span>{post.date}</span>
                </div>

                <div className="mt-4 flex space-x4 text-gray-600">
                    <button>👍 {post.likes} Likes |</button>
                    <span>| {post.comments} comentários</span>
                </div>
            </div>
        </div>
    );
}