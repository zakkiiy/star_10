// ConfirmModal.js
'use client'
import React from 'react';
import Star from './Star';

const ConfirmModal = ({ onClose }) => {
  const otherPositions = [
    { top: '80%', left: '80%' },
    // ...他のスターの位置
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
      {/* モーダルのコンテンツ */}
      <div className="bg-gray-800 p-6 rounded-lg text-center z-10" style={{ pointerEvents: 'auto' }}>
        <h2 className="text-xl font-bold mb-4">本当に退会しますか？</h2>
        <p className="mb-6">この操作は取り消せません。</p>
        <button
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-4"
        >
          いいえ
        </button>
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
      {otherPositions.map((position, i) => (
        <Star key={`other-page-star3${i+1}`} id={`other-page-star3${i+1}`} position={position} />
      ))}
    </div>
  );
};

export default ConfirmModal;