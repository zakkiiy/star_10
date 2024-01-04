"use client"
import React from 'react';
import Star from './components/Star';
import { useStars } from './context/StarContext';
import Link from 'next/link';

export default function Home() {
  const { setIsGameActive } = useStars();

  const startGame = () => {
    setIsGameActive(true);
  };

  const otherPositions = [
    { top: '150px', left: '250px' },
    { top: '900px', left: '250px' },
  ];

  const sections = [
    {
      title: "ゲームを開始",
      content: "「ゲームを開始」をクリックするとゲームが始まります。"
    },
    {
      title: "スターを集めよう",
      content: "サイト上に散りばめられた⭐️をできる限り早く集めてください。スターは全部で10個あります。"
    },
    {
      title: "構築中のサイト",
      content: "構築中のサイトのため、諸々動作が不安定かもしれません。"
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="text-center p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h1 className="text-4xl font-bold mb-4">スターを10個集めてください</h1>
          <p className="mb-4">
            ああ、大変！私たちがWebサイトを構築中に、大切にしていた魔法のスターを10個も落としてしまいました...
            どこかに散らばってしまったこれらのスターをみつけ出して、救ってください！
            スターはページの隅々に隠れているかもしれません。目を凝らして、できるだけ早く全てを集めてください！
          </p>
          <button
            onClick={startGame}
            className="bg-red-600 hover:bg-red-900 text-white font-bold py-4 px-8 mt-4 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline"
          >
            ゲームを開始
          </button>
        </section>

        <div className="flex justify-around mx-4 my-10">
          {sections.map((section, i) => (
            <div key={i} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow text-center">
                <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        {otherPositions.map((position, i) => (
          <Star key={`other-page-star${i+1}`} id={`other-page-star${i+1}`} position={position} />
        ))}
      </main>
    </div>
  );
}