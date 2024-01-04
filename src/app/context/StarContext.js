"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

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
      setCollectedStars(new Set([...collectedStars, id]));
      if (collectedStars.size >= 9) {
        setIsGameActive(false);
      }
    }
  };

  const attemptLogin = (password) => {
    if (password === "a") {
      setIsLoggedIn(true);
      setStatus('authenticated');
    } else {
      setIsLoggedIn(false);
      setStatus('');
    }
  };

  return (
    <StarContext.Provider value={{ collectedStars, collectStar, time, setTime, isGameActive, setIsGameActive, isLoggedIn, attemptLogin, status, setStatus }}>
      {children}
    </StarContext.Provider>
  );
};


