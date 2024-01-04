import React from 'react';
import Star from '../components/Star';

const Detail = () => {
  const otherPositions = [
    { top: '500px', left: '1300px' },
    // ...他のスターの位置
  ];

  const stories = [
    "夜中に目が覚めると、天井に顔が浮かんでいた。瞬く間に消えたが、その顔は私のものだった。",
    "毎晩、ベッドの下から誰かの息づかいが聞こえる。見下ろすと、自分と瓜二つの人間がにっこりと笑っている。",
    "引っ越したばかりの家で、壁の中から子供の声がする。しかし、壁を壊すと何もなかった。",
    "鏡を見るたびに、映る私の目が一つ増えている。今日はもう12つある。",
    "古い写真を見つけた。そこには見覚えのない家族と私が写っていた。彼らは私を見つめ、笑っている。",
    "真夜中に家の中を歩くと、いつも冷たい手が肩に触れる。振り返ると、そこには誰もいない。",
    "友達と話していると、彼が真剣な顔で「今、後ろにいるのは誰？」と聞いてきた。振り向くと、そこには私がいた。",
    "目覚まし時計が鳴る前に目が覚める。床には私の体が眠ったままだ。",
    "図書館で一冊の本を手に取ると、中から私の未来の死亡記事が出てきた。",
    "毎晩、窓をノックする音がする。問題は、私が12階に住んでいることだ。"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">怖い話集</h1>
      <p> GPT  怖い話を10個、短くて雰囲気のある形で提供します。それぞれ独立した小さな物語として機能して、読みやすく不気味な雰囲気を作り出します。</p>
      <div className="space-y-4">
        {stories.map((story, index) => (
          <p key={index} className="bg-gray-800 p-4 rounded-lg">{story}</p>
        ))}
      </div>
      {otherPositions.map((position, i) => (
          <Star key={`other-page-star4${i+1}`} id={`other-page-star4${i+1}`} position={position} />
      ))}
    </div>
  )
}

export default Detail;