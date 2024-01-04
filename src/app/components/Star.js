'use client'

import React from 'react';
import { useStars } from '../context/StarContext';

const Star = ({ id, position }) => {
  const { collectedStars, collectStar } = useStars();

  // スターが集められたかどうかを確認
  const isCollected = collectedStars.has(id);

  const handleClick = () => {
    if (!isCollected) {
      collectStar(id);  // まだ集められていなければ、スターを集める
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`star cursor-pointer text-yellow-300 ${isCollected ? 'hidden' : ''}`} // スターが集められた場合は非表示に
      style={{ position: 'absolute', ...position }}
    >
      ⭐️
    </button>
  );
};

export default Star;