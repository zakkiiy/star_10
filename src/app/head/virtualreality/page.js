
'use client'

import React from 'react';
import Link from 'next/link';
import { useStars } from '../../context/StarContext';
import Star from '../../components/Star';


const VirtualReality = () => {
  const { status } = useStars();
  const otherPositions = [
    { top: '700px', left: '200px' },
    // ...他のスターの位置
  ];

  if (status === 'authenticated') {
    // ログインしていない場合、メッセージを表示
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center">
        <div className="max-w-lg text-center p-8 border border-red-700 bg-gray-900 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-red-600">危険！</h2>
          <p className="text-lg text-gray-300 mb-6">
            このページは非常に危険なため、一度ログアウトしてからアクセスしてください。
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
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-5">おまけ</h1>
        <p className="mb-5">あああああ</p>
        <div className="animate-wiggle inline-block bg-purple-600 p-5 rounded transform duration-300 hover:scale-110">
          テストテストテストテストテストテストテスト
        </div>
        <div className="mt-10">
          <Link href="/">
            <button className="bg-blue-500 text-white p-2 rounded">戻る</button>
          </Link>
        </div>
      </div>
      {otherPositions.map((position, i) => (
        <Star key={`other-page-star6${i+1}`} id={`other-page-star6${i+1}`} position={position} />
      ))}
    </div>
  );
};

export default VirtualReality;