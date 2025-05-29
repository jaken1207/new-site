export default function AboutPage() {
  return (
    <main className="p-6 space-y-10 max-w-3xl mx-auto">
      {/* 院長・スタッフ紹介 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-yellow-400 pl-2">
          スタッフ紹介
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">院長</h3>
          <p className="text-gray-700">永田 正太郎</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">スタッフ</h3>
          <p className="text-gray-700">永田 寿子</p>
        </div>
      </section>

      {/* 治療の流れ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-l-4 border-yellow-400 pl-2">
          治療の流れ
        </h2>

        <div className="bg-green-50 p-4 rounded-md shadow">
          <p>
            <strong className="text-red-600">
              当院では30年の経験をもつ柔道整復師が全ての患者様の治療にあたっています。
            </strong>
            <br />
            個々の状態や症状にあわせて手技や治療器を用いて施術を行います。
          </p>
        </div>

        {[
          {
            title: "1. 問診と検査",
            content: (
              <>
                まず問診票の内容を確認し、具体的な症状をお伺いします。
                <br />
                <span className="text-red-600">
                  どんなに小さな事でもお話し下さい。それが悩みを解決する「カギ」になるかもしれません。
                </span>
              </>
            ),
          },
          {
            title: "2. 手技療法",
            content: (
              <>
                当院の基本はこの手技療法です。
                <br />
                骨や関節、筋肉を正常に整え、
                <span className="text-red-600">
                  自然治癒力を最大限に引き出すことを目指します。
                </span>
                <br />
                ソフト・無痛・心地よい施術を症状にあわせて行います。
              </>
            ),
          },
          {
            title: "3. 物理療法",
            content: (
              <>
                各種の治療器具を用い、筋肉や関節の緊張を緩和し痛みを軽減します。
              </>
            ),
          },
          {
            title: "4. 症状説明",
            content: (
              <>
                症状や治療内容を丁寧に説明します。
                <br />
                予防策・注意点・今後の通院計画もご案内いたします。
              </>
            ),
          },
        ].map((step, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold border-b border-gray-300 pb-1">
              {step.title}
            </h3>
            <div className="mt-2 text-gray-700 text-sm">{step.content}</div>
          </div>
        ))}
      </section>
      <section className="p-6 mt-12 space-y-6 bg-yellow-50 border-l-4 border-yellow-400">
        <h2 className="text-2xl font-bold text-yellow-700">
          整体治療予約制のお知らせ
        </h2>

        <p className="text-lg text-gray-700 font-semibold border-b pb-2">
          手技による実費診療を行っております。
        </p>

        <p className="text-base">
          下記のような症状の方に特にお勧めいたします！
        </p>

        <ul className="list-disc list-inside space-y-1 text-red-600 pl-2">
          <li>他のマッサージ、整体などでは改善されなかった</li>
          <li>時間をかけて、ゆっくり診てほしい</li>
          <li>昔からの腰痛、肩こりが激しくて困っている</li>
          <li>頭痛、便秘、生理痛など体調がすぐれない</li>
          <li>他の人と一緒だと恥ずかしい</li>
          <li>時間通りに治療をしてほしい　など</li>
        </ul>

        <div className="text-sm bg-gray-100 p-4 rounded border border-gray-300">
          実費診療は、水曜日と土曜日の午後のみ承っております。
          <br />
          当院受付にお声掛けいただくか、お電話にてご予約ください。
          <br />
          時間はご相談くださいませ♪
        </div>

        <div className="text-base pt-4">
          <h3 className="font-bold mb-1 text-gray-700">▶ 料金</h3>
          <p>
            初診：5,000円
            <br />
            再診以降：3,000円
          </p>
          <p className="text-blue-600 mt-2 text-sm font-semibold">
            ※当院で治療中の方は初診料は必要ありません
          </p>
        </div>
      </section>
      {/* 患者さんの声 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-l-4 border-yellow-400 pl-2">
          患者さんの声
        </h2>

        {[
          {
            name: "Fさん　50代（男性）",
            content: `社会人バレーのコーチをされているFさん。左肩が上がらず、サーブができるようになるのが目標。
            夏から週1〜2回の治療と、自宅での段階ごとのストレッチを続け、今では軽いサーブが可能に。
            チームと共に週2回の練習を継続されています。`,
          },
          {
            name: "Kさん　70代（女性）",
            content: `2週間前に娘に連れられて来院。足の痛みで歩行も自転車も困難でしたが、現在は自転車で通院。
            草取り時の痛みはあるものの、日常の自由が戻ってきたとのことです。`,
          },
          {
            name: "Yさん　60代（女性）",
            content: `追突事故後、首から背中にかけての痛みで寝たきりに。
            友人に勧められて来院し、10日後には仕事復帰が見えてきました。早めの治療が効果的だったそうです。`,
          },
          {
            name: "Yさん　40代（男性）",
            content: `約1年半通院され、以前より体調が安定してきたとのこと。今後も継続予定です。`,
          },
          {
            name: "Tさん　60代（女性）",
            content: `ぎっくり腰になり旅行を諦めかけましたが、治療の継続で旅行も無事実現。
            趣味のダンスも再開できました。`,
          },
        ].map((voice, i) => (
          <article key={i} className="bg-gray-50 p-4 rounded-md shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              {voice.name}
            </h3>
            <p className="text-gray-700 text-sm mt-2 whitespace-pre-line">
              {voice.content}
            </p>
          </article>
        ))}
      </section>

      {/* メッセージセクション */}
      <section className="text-center py-8 bg-yellow-50 border-4 border-yellow-200">
        <p className="text-3xl md:text-3xl font-extrabold text-red-600 leading-relaxed mb-2">
          ご予約なしで診察可能です！
        </p>
        <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed">
          気になる 痛み を一緒に治療しましょう。
          <br />
          <span className="text-blue-600">ご不明な点</span>{" "}
          はお気軽にお問い合わせください。
        </p>
      </section>
    </main>
  );
}
