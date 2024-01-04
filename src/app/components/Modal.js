// components/Modal.js
import React from 'react';
import { useStars } from '../context/StarContext';
import TwitterShareButton from './TwitterShareButton';

const Modal = () => {
  const { time, setShowModal, resetGame } = useStars();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleRestart = () => {
    resetGame();
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-2xl font-bold mb-2">ゲームクリア！</h2>
        <p>おめでとうございます！ {time} 秒で全てのスターを集めました。</p>
        <TwitterShareButton time={time} />
        <div className="flex justify-around mt-4">
          <button onClick={handleClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">閉じる</button>
          <button onClick={handleRestart} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">リスタート</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
