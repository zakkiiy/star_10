
'use client'

import React from 'react';
import Link from 'next/link';
import { useStars } from '../../context/StarContext';

const VirtualReality = () => {
  const { status } = useStars();

  if (status === 'authenticated') {
    // ログインしていない場合、メッセージを表示
    return (
      <div className="container mx-auto my-10 p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">アクセス制限</h2>
        <p>仮想現実ページを表示するにはログアウトが必要です</p>
        <Link href="/auth">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-6">ログインページへ</div>
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-5">仮想世界の情報求む</h1>
        <p className="mb-5">目の前の現実がぐにゃぐにゃと歪む... ここは夢か現か？</p>
        <div className="animate-wiggle inline-block bg-purple-600 p-5 rounded transform duration-300 hover:scale-110">
          何かがこちらに迫ってくる...
        </div>
        <div className="mt-10">
          <Link href="/">
            <button className="bg-blue-500 text-white p-2 rounded">戻る</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtualReality;