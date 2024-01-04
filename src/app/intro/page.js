import React from 'react';

const Intro = () => {
  return (
    <div className="app">
      {/* ヘッダーセクション */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
        <h1 className="text-4xl font-bold">自己紹介</h1>
      </header>

      {/* 自己紹介セクション */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-3">開発者について</h2>
        <p>私はスター収集ゲームの開発者です。探索と発見の楽しさを提供するゲームを作っています。</p>
      </section>

      {/* 好きな食べ物セクション */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-3">好きな食べ物</h2>
        <p>私の好きな食べ物は寿司とラーメンです。新しい味を探求することが大好きです。</p>
      </section>

      {/* 座右の銘セクション */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-3">座右の銘</h2>
        <p>パスワードはサイト名にするに限る。</p>
      </section>

      {/* パスワードヒントセクション */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-3">パスワードヒント</h2>
        <p>ゲームのパスワードは「サイト名にするに限る」です。これがあなたの冒険への鍵となります。</p>
      </section>
    </div>
  );
}

export default Intro;
