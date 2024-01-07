'use client'

import React, { useState } from 'react';
import Star from '../components/Star';
import Link from 'next/link';
import { useStars } from '../context/StarContext';
import ReactPaginate from 'react-paginate';

const Detail = () => {
  const { status } = useStars();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const otherPositions = [
    { top: '52%', left: '70%' },
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
    "毎晩、窓をノックする音がする。問題は、私が12階に住んでいることだ。",
    "廃墟と化した病院で夜を過ごすことになった。真夜中に、廊下の奥から車椅子の軋む音が聞こえてきた。",
    "新しく買った家の地下室から、前の住人の名前を呼ぶ声が聞こえる。しかし、その住人は数年前に亡くなっている。",
    "毎夜、夢の中で不気味な森を彷徨う。ある夜、現実の庭にその森から抜け出したと確信する足跡を見つけた。",
    "祖父の遺品整理をしていたら、彼が若い頃に撮った写真に私が写っていた。その日、私はまだ生まれていなかった。",
    "夜、いつも聞こえる子守唄。しかし、子供はもう何年も前に成長し、家を出ていった。",
    "一人で映画を見ていたら、画面に映る観客の一人がこちらを指さし、にっこり笑った。",
    "古い本屋で買った本の中から、自分宛の手紙が出てきた。それは50年前の日付が入っていた。",
    "新しいアパートに越してきたが、前の住人が残したと思われるミラーには、見覚えのある顔が時々現れる。",
    "散歩中に見つけた、使われなくなった古い遊園地。中を探検していると、乗り物がひとりでに動き出した。",
    "母が遺した古い日記を読んでいたら、私がまだ記憶にない幼い頃の私について書かれた、奇妙な出来事が綴られていた。",  
    "夕食後、洗い物をしていると、窓の外から私をじっと見つめる顔があった。振り返ると、そこには誰もいなかった。",
    "朝目覚めると、私の名前を呼ぶ声がする。しかし、部屋には私一人だけだった。",
    "古い家を購入した後、夜な夜な壁の中から悲鳴のような音が聞こえてくる。調査するが、原因は見つからない。",
    "カメラで撮影した写真に、毎回見知らぬ人が写り込む。その人物は、写真ごとにだんだんと私に近づいている。",
    "一人暮らしを始めたばかりのアパートで、夜中に冷蔵庫の中から誰かが話す声がする。しかし、開けても中には食べ物しかない。",
    "散歩中に見つけた奇妙な彫像。それを撫でた後から、夢の中で彫像が私を導こうとする。",
    "夜、ふと目が覚めると、天井には無数の黒い影が這っていた。瞬くと消えたが、何かが私の足を掴んでいる。",
    "新しい仕事を始めたオフィス。昼間は普通だが、夜になると廊下で誰かが私の名前を囁く。",
    "毎晩、私のベッドの周りを囲むように置かれた人形。朝起きると、その人形たちが微妙に位置を変えている。",
    "友人からもらった古いペンダントを身につけてから、見知らぬ時代の夢を見るようになった。目覚めると、その時代の物が手元にある。",
    "携帯電話に見知らぬ番号から着信があり、出ると「戻ってきて」という声だけが聞こえた。その声は亡くなったはずの祖母のものだった。",
    "引越し先の家の庭には、毎晩異常に大きな花が咲く。しかし、朝になると跡形もなく消えている。",
    "夜中に突然、家の中の時計が全て同時に止まった。その瞬間、家全体が震え、耳をつんざく悲鳴が聞こえた。",
    "学校の帰り道、いつもと違う道を歩いてみると、消えたはずの古い友達が待っていた。彼に手を引かれそうになるが、急いで逃げ出した。",
    "子供の頃に埋めたタイムカプセルを掘り起こすと、中からは明らかに自分の筆跡で書かれた「助けて」というメモが出てきた。",
    "夜、窓から見える隣家の女性が、毎晩私を指さし、何かを話しているように見える。しかし、隣家には誰も住んでいない。",
    "友人とキャンプをしていた夜、遠くの木々の間から赤い目をした影がこちらを見つめているのを見た。翌朝、その場所には何もなかった。",
    "古いアンティークショップで見つけた鏡。家に持ち帰ったが、その鏡に映るのは別の部屋の様子だ。",
    "夢の中でいつも訪れる古い家。目覚めると、その家の鍵が枕元に置かれていた。",
    "夜道を歩いていると、後ろから足音が聞こえる。振り返ると誰もいないが、足音は私の歩みと同じ速さで続く。",
    "聞こえないはずの祖母の歌声が、家のどこかから聞こえてくる。声に導かれると、祖母がよく座っていた古い椅子があった。",
    "新しく購入した古い時計が、深夜0時になると、別の時間に逆戻りする。その時間には、過去の住人の声が聞こえる。",
    "夜、家の外から私の名前を呼ぶ声がする。声の方を見ると、自分に瓜二つの人物が立っていた。",
    "旅行から戻ると、家の中の写真全ての人物が消えていた。代わりに各写真には、私を見つめる一つの黒い影が写っている。",
    "部屋に飾った新しい絵画。しかし、夜になると絵の中の風景が暗く歪んでいく。",
    "バスに乗っていると、隣に座るはずのない"
  ];

  const pageCount = Math.ceil(stories.length / itemsPerPage);  // 総ページ
  const currentStories = stories.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  if (status === 'authenticated') {
    // ログインしていない場合
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">アクセス制限</h2>
          <p className="mb-6 text-gray-600">このページを表示するにはログアウトが必要です。</p>
          <Link href="/auth">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
              ログインページへ
            </div>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">怖い話集</h1>
      <h1 className="text-3xl font-bold mb-6">GPTに短編の怖い話を作っていただきました。</h1>
      <div className="space-y-4">
        {currentStories.map((story, index) => (
          <p key={index} className="bg-gray-800 p-4 rounded-lg">{story}</p>
        ))}
      </div>
      {otherPositions.map((position, i) => (
        <Star key={`other-page-star4${i+1}`} id={`other-page-star4${i+1}`} position={position} />
      ))}
      <ReactPaginate
        previousLabel={'前'}
        nextLabel={'次'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        className="pagination"
      />
    </div>
  );
}

export default Detail;
