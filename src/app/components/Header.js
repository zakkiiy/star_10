'use client'
// components/Header.js
import React from 'react';
import Link from 'next/link';
import { useStars } from '../context/StarContext';
import { FaUser, FaHome, FaClock, FaStar,FaListAlt,FaPlusCircle,FaUserCircle,FaSignOutAlt } from 'react-icons/fa';
import { TbGhost2 } from "react-icons/tb";

export default function Header() {
  const { time, collectedStars, status } = useStars();

  return (
    <header className="bg-gray-100 p-4 text-lg font-bold flex justify-between items-center">
      <Link href="/"><div className="text-2xl">Star-10</div ></Link>
      <div>
        <FaClock className="inline mr-2" />時間: {time}秒
        <FaStar className="inline ml-4 mr-2" />集めた星: {collectedStars.size}
      </div>
      <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/horror/index">
                <div className="flex items-center text-black hover:text-blue-400">
                  <TbGhost2 className="mr-2" />ホラーページ
                </div>
              </Link>
            </li>
            <li>
              <Link href="/intro">
                <div className="flex items-center text-black hover:text-blue-400">
                  <FaPlusCircle className="mr-2" />自己紹介
                </div>
              </Link>
            </li>
            {status === 'authenticated' ? (
            // ログアウトリンク
            <li>
              <Link href="/auth">
                <div className="flex items-center text-black hover:text-blue-400 cursor-pointer">
                  <FaSignOutAlt className="mr-2" />ログアウト
                </div>
              </Link>
            </li>
          ) : (
            // ログインリンク
            <li>
              <Link href="/auth">
                <div className="flex items-center text-black hover:text-blue-400">
                  <FaUserCircle className="mr-2" />ログイン
                </div>
              </Link>
            </li>
          )}
          </ul>
        </nav>
    </header>
  );
}
