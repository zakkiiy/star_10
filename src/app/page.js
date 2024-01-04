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
    // ...他のスターの位置
  ];

  const sections = [
    "このサイトは未完成です。",
    "取得したスターは画面上から消えません。すみません。",
    // ... 8番目まで同様にセクションの説明を追加
    "「ゲームを開始」をクリックするとゲームが開始します。",
    "スターの位置を固定化しようと思いましたが、諦めました。",
    "準備中", 
    "準備中",
    "準備中",
    "準備中",
    "準備中",
    "詳細ページ",
    "最後のセクションです！詳細を知りたい方はこちら！", 
    "最後のセクションです！詳細を知りたい方はこちら！", 
    "最後のセクションです！詳細を知りたい方はこちら！", 
    "最後のセクションです！詳細を知りたい方はこちら！", 
    "最後のセクションです！詳細を知りたい方はこちら！", 
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="text-center p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h1 className="text-4xl font-bold mb-4">星を集めるゲーム</h1>
          <p className="mb-4">このゲームでは、星を集めて時間を競います。できるだけ早く全ての星を集めましょう！</p>
          <button onClick={startGame} className="bg-blue-500 text-white p-2 mt-4">ゲームを開始</button>
        </section>
        {otherPositions.map((position, i) => (
        <Star key={`other-page-star${i+1}`} id={`other-page-star${i+1}`} position={position} />
        ))}
        {/* 10個のセクションを横並びに配置 */}
        <div className="flex flex-wrap mx-4 my-10">
          {sections.map((content, i) => (
            <div key={i} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-3">セクション{i + 1}</h2>
                {i === 9 ? ( // 10個目のセクションの場合、リンクを表示
                  <Link href="/additional-info">
                    <div className="text-blue-500 hover:text-blue-700">{content}</div>
                  </Link>
                ) : (
                  <p>{content}</p> // それ以外の場合、通常のテキストを表示
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}