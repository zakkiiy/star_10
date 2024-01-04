'use client'

// pages/horror/index.js
import React from 'react';
import { useStars } from '../../context/StarContext';
import Link from 'next/link';
import { FaGhost } from 'react-icons/fa'; // ホラーアイコン

const HorrorPage = () => {
  const { status } = useStars();

  if (status !== 'authenticated') {
    // ログインしていない場合、メッセージを表示
    return (
      <div className="container mx-auto my-10 p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">アクセス制限</h2>
        <p>ホラーページを表示するにはログインが必要です。</p>
        <Link href="/auth">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-6">ログインページへ</div>
        </Link>
      </div>
    );
  }

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
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            さらに深く探索する
          </button>
        </div>
      </div>
    </div>
  );
}

export default HorrorPage;