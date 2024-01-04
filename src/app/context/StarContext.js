"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import Modal from '../components/Modal'

const StarContext = createContext({
  collectedStars: new Set(),
  collectStar: () => {},
  time: 0,
  setTime: () => {},
  isGameActive: false,
  setIsGameActive: () => {},
  isLoggedIn: false,
  attemptLogin: () => {},
  status: '',
  setStatus: () => {}
});

export const useStars = () => useContext(StarContext);

export const StarProvider = ({ children }) => {
  const [collectedStars, setCollectedStars] = useState(new Set());
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    let interval;
    if (isGameActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isGameActive]);
  
  const collectStar = (id) => {
    if (isGameActive && !collectedStars.has(id)) {
      const newSet = new Set([...collectedStars, id]);
      setCollectedStars(newSet);
      if (newSet.size >= 10) {
        setIsGameActive(false);
        setShowModal(true);  // 10個のスターを集めたらモーダルを表示
      }
    }
  };
  
  const attemptLogin = (password) => {
    if (password === "Star-10") {
      setIsLoggedIn(true);
      setStatus('authenticated');
    } else {
      setIsLoggedIn(false);
      setStatus('');
    }
  };

  const resetGame = () => {
    setCollectedStars(new Set());  // 集めたスターをリセット
    setTime(0);  // タイムをリセット
    setIsGameActive(false);  // ゲーム状態を非アクティブに
    setStatus('');  // ログイン状態をリセット（必要に応じて）
  };

  return (
    <StarContext.Provider value={{ collectedStars, collectStar, time, setTime, isGameActive, setIsGameActive, isLoggedIn, attemptLogin, status, setStatus, showModal, setShowModal, resetGame }}>
      {children}
      {showModal && <Modal />} 
    </StarContext.Provider>
  );
};
