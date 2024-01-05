'use client'
// components/Header.js
import React from 'react';
import Link from 'next/link';
import { useStars } from '../context/StarContext';
import { FaClock, FaStar,FaPlusCircle,FaUserCircle,FaSignOutAlt } from 'react-icons/fa';
import { TbGhost2 } from "react-icons/tb";
import { TbBrandDaysCounter } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { AiTwotoneStar } from "react-icons/ai";

export default function Header() {
  const { time, collectedStars, status } = useStars();

  return (
    <header className="bg-gray-100 p-4 text-lg font-bold flex justify-between items-center">
      <Link href="/">
        <div className="text-2xl">
          <AiTwotoneStar className="inline ml-4 mr-2" />Star-10
        </div>
      </Link>
      <div>
        <FaClock className="inline mr-2" />時間: {time}秒
        <FaStar className="inline ml-4 mr-2" />集めた星: {collectedStars.size}
      </div>
      <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/zange">
                <div className="flex items-center text-black hover:text-blue-400">
                  <TbBrandDaysCounter className="mr-2" />本日の投稿
                </div>
              </Link>
            </li>
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
                  <GiSelfLove className="mr-2" />自己紹介
                </div>
              </Link>
            </li>
            <li>
              <Link href="../settings">
                <div className="flex items-center text-black hover:text-blue-400">
                  <FaPlusCircle className="mr-2" />設定
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
