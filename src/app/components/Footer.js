import React from 'react';
import Link from 'next/link';
import { FaRobot, FaRegHandshake, FaShieldAlt } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <nav className="flex justify-center items-center space-x-6">
          <Link href="/head/contact" className="flex flex-col items-center">
            <FaRegHandshake className="text-2xl text-indigo-400"/>
            <span className="mt-1">利用規約</span>
          </Link>
          <Link href="/head/service" className="flex flex-col items-center">
            <FaShieldAlt className="text-2xl text-indigo-400"/>
            <span className="mt-1">プライバシーポリシー</span>
          </Link>
          <Link href="/head/privacy_policy" className="flex flex-col items-center">
            <FaRobot className="text-2xl text-indigo-400"/>
            <span className="mt-1">連絡先</span>
          </Link>
        </nav>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Star-10. All rights reserved.</p>
          <Link href="/head/virtualreality" className="flex flex-col items-center">
            <FaRobot className="text-2xl text-indigo-400"/>
            <span className="mt-1">仮想現実</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

//