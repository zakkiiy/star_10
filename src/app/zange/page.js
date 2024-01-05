import Link from 'next/link';

export default function Zange() {
  const sections = [
    "このサイトは未完成です。",
    "構築中のため動作が不安定です",
    "Action Cableで協力プレイ無理でした",
    "スターの位置を固定化しようと思いましたが諦めました。",
    "DB等を使用していないため保存されません",
    "一旦落ち着いてと",
    "もう一回落ち着いてと", 
    "卒業までにMVPリリースできますように。",
    "卒業できますように。",
    "テスト",
    "GPTに短編の怖い話を作ってもらった",
    "テスト",
    "テスト", 
    "テスト", 
    "テスト", 
    "テスト", 
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        
        <div className="flex flex-wrap mx-4 my-10">
          {sections.map((content, i) => (
            <div key={i} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-3">投稿{i + 1}</h2>
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