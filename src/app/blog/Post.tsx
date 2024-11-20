'use client'

import Post from "../../componentes/post";

const urlPosts: string = 'http://localhost:3000/posts.json';


async function getPosts() {
    const response = await fetch(urlPosts, {
        next: { revalidate: 10, },
    });

    if (!response.ok) {
        throw new Error('Erro ao carregar os posts');
    }

    return response.json();
}

export default async function PrimeiroPost() {
    const posts = await getPosts();


    return (
        <main className="flex flex-col gap-8 min-h-screen bg-indigo-950">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center md-12 text-indigo-50 py-5">
                    Blog
                </h1>

                <div key={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post: any) => (
                        <Post post={post}/>
                    ))}
                </div>
            </div>
        </main>

    );
}