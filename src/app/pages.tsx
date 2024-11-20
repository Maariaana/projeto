'use client'

import Header from "../componentes/header";
import Botao from "../componentes/botao";
import { useState } from "react";
import PrimeiroPost from "./blog/Post";


export default function Home() {
  const names = ['Mariana', 'Murilo', 'Pandora']

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1)
  }


  return (
    <main className="flex flex-col gap-8 min-h-screen bg-indigo-950">
      <Header title="React" />
      <div className="container mx-auto p-6">
        <Botao />

        <ul className="ml2">
          {
            names.map(name => (
              <li key={name}>{name}</li>
            ))
          }
        </ul>

        <button className="m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          likes {likes}
        </button>

        <PrimeiroPost />
      </div>
    </main>
  );
}