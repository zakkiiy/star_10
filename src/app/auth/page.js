'use client'

import { useState } from 'react';
import { useStars } from '../context/StarContext';
import Star from '../components/Star';

const Auth = () => {
  const { status, attemptLogin, setStatus } = useStars();
  const [password, setPassword] = useState('');
  const [dummyPassword, setDummyPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // エラーメッセージの状態

  const otherPositions = [
    { top: '1300px', left: '700px' },
    // ...他のスターの位置
  ];

  const handleLogin = () => {
    if (password === "Star-10") {
      attemptLogin(password);
      setErrorMessage(''); // ログイン成功時はエラーメッセージをクリア
    } else {
      setErrorMessage('パスワードが間違っています。'); // エラーメッセージを設定
      setPassword(''); // パスワード入力をクリア
    }
  };

  const handleLogout = () => {
    setStatus('');
  };

  const handleLogoutX = () => {
    alert("エラー")
  }

  const handleDummyInputClick = () => {
    alert("これはダミーの入力フィールドです。");
  };


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
          <button onClick={handleLogout} className="bg-red-800 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-4">ログアウト</button>
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
          {otherPositions.map((position, i) => (
            <Star key={`other-page-star2${i+1}`} id={`other-page-star2${i+1}`} position={position} />
          ))}
        </>
      ) : (
        <>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>} {/* エラーメッセージを表示 */}
          <input 
            type="password" 
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4"
          />
          <button onClick={handleLogin} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">ログイン</button>
          <p className="mt-4">ログインしてください。</p>
          <div className="container mx-auto my-10 p-8 max-w-md border rounded shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
            <h1 className="text-3xl font-bold mb-4">あとで消す</h1>
            <div className="mt-8">
              <input 
                type="password" 
                placeholder="パスワードを入力する"
                value={dummyPassword}
                onChange={(e) => setDummyPassword(e.target.value)}
                onClick={handleDummyInputClick}
                className="w-full p-2 mb-4 cursor-pointer"
              />
              <p>ログインしてください</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;