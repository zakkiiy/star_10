const Service = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold border-b pb-4">利用規約</h1>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>以下は、Star-10のサービス利用に関する規約です。ご利用にあたっては、これらの条件をお読みになり、同意の上でサービスをご利用ください。</p>
          <h2 className="text-xl font-bold mb-2">1. サービス利用</h2>
          <p>当社のサービスは、個人的な非商用利用のためのものです。商用目的での利用は禁止されています。</p>
          <h2 className="text-xl font-bold mb-2">2. 著作権</h2>
          <p>サービス内で提供されるコンテンツの著作権は、当社またはその提供元に帰属します。無断での複製、配布は禁止されています。</p>
          <h2 className="text-xl font-bold mb-2">3. 免責事項</h2>
          <p>当社は、サービスの中断、情報の誤り、利用から生じるいかなる損害に対しても、責任を負いかねます。</p>
          <h2 className="text-xl font-bold mb-2">4. 禁止行為</h2>
          <p>迷惑行為、不正アクセス、その他当社が不適切と判断する行為は禁止されています。</p>
          <h2 className="text-xl font-bold mb-2">5. 変更と終了</h2>
          <p>当社は、利用規約の変更またはサービスの終了を予告なく行うことがあります。</p>
          <p>利用規約の変更については、このページで随時更新いたします。</p>
          <p>ご不明点がある場合は、お問い合わせください。</p>
        </div>
      </div>
    </div>
  )
}

export default Service;