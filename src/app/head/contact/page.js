import Link from 'next/link';
import Star from '../../components/Star';

const Contact = () => {
  const otherPositions = [
    { top: '500px', left: '1300px' },
    // ...他のスターの位置
  ];
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold border-b pb-4">連絡先</h1>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>Star-10に関するご質問やサポートが必要な場合は、以下の方法でお気軽にお問い合わせください。</p>
          
          <div>
            <h2 className="text-xl font-bold mb-2">メールでのお問い合わせ</h2>
            <p>info@star-10</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">郵送でのお問い合わせ</h2>
            <p>〒123-4567</p>
            <p>星十郡星十町1-2-3 Star-10ビル タワマン</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">電話でのお問い合わせ</h2>
            <p>0120-123-456789</p>
          </div>

          <p>営業時間: 毎日 00:00 - 23:59 (土日祝日も)</p>

          <div>
            <h2 className="text-xl font-bold mb-2">Twitter</h2>
            <Link href="https://twitter.com/zakkii_y" target="_blank">Twitter</Link>
          </div>
          {otherPositions.map((position, i) => (
          <Star key={`other-page-star5${i+1}`} id={`other-page-star5${i+1}`} position={position} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Contact;