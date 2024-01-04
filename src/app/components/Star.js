'use client'

import React from 'react';
import { useStars } from '../context/StarContext';

const Star = ({ id, position }) => {
  const { collectStar } = useStars();

  return (
    <button
      onClick={() => collectStar(id)}
      className="star cursor-pointer text-yellow-300" // Tailwindのクラスを使用
      style={{ position: 'absolute', ...position }} // 絶対位置指定とカスタム位置
    >
      ⭐️
    </button>
  );
};

export default Star;

