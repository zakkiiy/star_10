'use client'
import { useStars } from '../context/StarContext';
import React, { useState } from 'react';
import Link from 'next/link';
import ConfirmModal from '../components/ConfirmModal'
import Star from '../components/Star';

const Settings = () => {
  const { status } = useStars();
  const [showModal, setShowModal] = useState(false);
  const otherPositions = [
    { top: '60%', left: '70%' },
    // ...他のスターの位置
  ];

  const handleOpenModal = () => {
    setShowModal(true);  //
  };

  const handleCloseModal = () => {
    setShowModal(false);  // モーダルを非表示
  };

  if (status !== 'authenticated') {
    // ログインしていない場合
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">アクセス制限</h2>
          <p className="mb-6 text-gray-600">設定を表示するにはログインが必要です。</p>
          <Link href="/auth">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
              ログインページへ
            </div>
          </Link>
        </div>
        {otherPositions.map((position, i) => (
          <Star key={`other-page-star10${i+1}`} id={`other-page-star10${i+1}`} position={position} />
      ))}
      </div>
    );
  };

  // ログインしている場合
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">設定</h1>
      <button
        onClick={handleOpenModal}
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
      >
        退会する
      </button>
      {showModal && <ConfirmModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Settings;