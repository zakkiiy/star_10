import Link from 'next/link';

export default function Zange() {
  const sections = [
    "このサイトは未完成です。",
    "バグだらけです。",
    // ... 8番目まで同様にセクションの説明を追加
    "Action Cableで協力プレイ無理でした",
    "スターの位置を固定化しようと思いましたが諦めました。",
    "一旦落ち着いてと",
    "もう一回落ち着いてと", 
    "卒業までにMVPリリースできますように。",
    "卒業できますように。",
    "準備中",
    "リンクの練習",
    "詳細ページ",
    "準備中", 
    "準備中", 
    "準備中", 
    "準備中", 
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        
        <div className="flex flex-wrap mx-4 my-10">
          {sections.map((content, i) => (
            <div key={i} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-3">懺悔{i + 1}</h2>
                {i === 9 ? ( // 10個目のセクションの場合、リンクを表示
                  <Link href="../detail">
                    <div className="text-blue-500 hover:text-blue-700">{content}</div>
                  </Link>
                ) : (
                  <p>{content}</p> // それ以外の場合、通常のテキストを表示
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}