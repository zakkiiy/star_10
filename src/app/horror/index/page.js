'use client'

// pages/horror/index.js
import React from 'react';
import { useStars } from '../../context/StarContext';
import Link from 'next/link';
import { FaGhost } from 'react-icons/fa'; // ホラーアイコン
import Star from '../../components/Star';

const HorrorPage = () => {
  const { status } = useStars();

  const otherPositions = [
    { top: '900px', left: '1300px' },
    // ...他のスターの位置
  ];

  const handleTansaku = () => {
    alert('準備中です😅');
  };

  if (status !== 'authenticated') {
    // ログインしていない場合、メッセージを表示
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center">
        <div className="max-w-lg text-center p-8 border border-red-700 bg-gray-900 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-red-600">危険！</h2>
          <p className="text-lg text-gray-300 mb-6">
            このページは非常に危険なため。ホラーページへのアクセスにはログインが必要です。続行する前には、十分注意してください。
          </p>
          <Link href="/auth">
            <div className="inline-block bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300">
              ログインページへ
            </div>
          </Link>
        </div>
        <div className="mt-10">
          <Link href="/">
            <div className="text-gray-400 hover:text-gray-200">ホームに戻る</div>
          </Link>
        </div>
      </div>
    );
  };
  // ログインしている場合、ホラーページの内容を表示
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="container mx-auto">
        {/* ページのタイトル */}
        <h1 className="text-4xl font-bold mb-6">不気味な森へようこそ</h1>
        
        {/* ホラーアイコン */}
        <div className="text-center mb-6">
          <FaGhost className="text-9xl mx-auto animate-pulse text-gray-500" />
        </div>

        {/* ページの内容 */}
        <p className="mb-4">
          深夜の森の中、不気味な音があなたを包み込む... あなたは勇気を持ってこの地を探索する準備ができていますか？
        </p>
        <p>
          このページは、心霊現象や超自然的な話題を扱っています。暗闇の中で何かがうごめいているのを感じたら、すぐにこの場所から離れてください。
        </p>
        
        {/* ボタン */}
        <div className="mt-10 text-center">
          <button onClick={handleTansaku} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            さらに深く探索する
          </button>
        </div>
        {otherPositions.map((position, i) => (
          <Star key={`other-page-star7${i+1}`} id={`other-page-star7${i+1}`} position={position} />
        ))}
      </div>
    </div>
  );
}

export default HorrorPage;