// components/Modal.js
import React from 'react';
import { useStars } from '../context/StarContext';

const Modal = () => {
  const { time, setShowModal, resetGame } = useStars();

  const handleClose = () => {
    setShowModal(false);  // モーダルを閉じる
  };

  const handleRestart = () => {
    resetGame();  // ゲームをリセット
    setShowModal(false);  // モーダルを閉じる
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-2xl font-bold mb-2">ゲームクリア！</h2>
        <p>おめでとうございます！ {time} 秒で全てのスターを集めました。</p>
        <a
          href={`https://twitter.com/intent/tweet?text=私は${time}秒で全てのスターを集めました！`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitterで共有
        </a>
        <div className="flex justify-around mt-4">
          <button onClick={handleClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">閉じる</button>
          <button onClick={handleRestart} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">リスタート</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
