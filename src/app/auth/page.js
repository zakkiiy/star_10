'use client'

import { useState } from 'react';
import { useStars } from '../context/StarContext';

const Auth = () => {
  const { status, attemptLogin, setStatus } = useStars();
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    attemptLogin(password);
  };

  const handleLogout = () => {
    setStatus(''); // ログアウト時に状態をリセット
  };

  const handleLogoutX = () => {
    alert("準備中")
  }

  return (
    <div className="container mx-auto my-10 p-8 max-w-md border rounded shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
      <h1 className="text-3xl font-bold mb-4">認証</h1>
      {status === 'authenticated' ? (
        <>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
          <p>ログインに成功しました。</p>
          <button onClick={handleLogoutX} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
        </>
      ) : (
        <>
          <input 
            type="password" 
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4"
          />
          <button onClick={handleLogin} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">ログイン</button>
          <p className="mt-4">ログインしてください。</p>
        </>
      )}
    </div>
  );
};

export default Auth;