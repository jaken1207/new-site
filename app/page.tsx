import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="w-full flex justify-center items-center py-8">
        <div className="w-full max-w-3xl ">
          <Image
            src="/main.png"
            width={800}
            height={100}
            alt="外観と院内の写真が並んだ画像に「当院では、ご来院いただく患者様に 心まで癒されていただけますよう、真心を込めて施術いたします。痛みなどでお悩みの方は、ぜひご相談ください。」と書かれています"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* 診療時間セクション */}
      <section className="bg-gray-50 py-8 px-4 max-w-3xl mx-auto rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          診療時間のご案内
        </h3>
        <div className="text-gray-700 text-center">
          <p>月・火・木・金：8:00〜12:30 / 15:00〜19:00</p>
          <p>水・土：8:00〜13:30（15:00〜19:00は実費診療）</p>
          <p className="text-red-500 mt-2">※ 日曜・祝日は休診</p>
          <p className="mt-2">※ 診療時間の10分前を目安にご来院ください</p>
        </div>
        <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded text-center">
          <strong>お知らせ：</strong>直近のお知らせはありません。
        </div>
      </section>

      {/* よくあるご質問セクション */}
      <section className="max-w-3xl bg-white rounded-lg mx-auto py-12 px-4 mt-8 shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          よくあるご質問
        </h3>
        <ul className="space-y-6 p-3">
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q1. どんな施術ですか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.
              お客さんひとりひとりの症状に応じ、その時の最も適した施術をいたします。
              <br />
              特に
              <span className="text-red-500 font-semibold">
                ソフト・無痛・心地よい手技療法
              </span>
              を重要視しており、物理療法と手技治療を行います。
              <br />
              患者様の身体に合った施術を行っていますので、安心してご来院ください。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q2. 予約制ですか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.{" "}
              <span className="text-red-500 font-semibold">
                予約なしでも施術可能ですが、予約優先とさせていただいております。
              </span>
              <br />
              なお、水曜・土曜の午後は実費診療となりますので、事前にご連絡ください。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q3. 健康保険は使えますか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.{" "}
              <span className="text-red-500 font-semibold">
                保険適用は可能です。
              </span>
              健康保険証かマイナンバーカードを忘れずにお持ちください。
              <br />
              当院では、交通事故、各種保険、生活保護等による治療を行っております。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q4. 施術時間はどれくらいですか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A. 初回は40〜50分、2回目以降は30〜40分程度です。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q5. どのような症状に対応していますか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.
              肩こり、腰痛、膝の痛み、スポーツ障害、交通事故後のケアなど、幅広い症状に対応しています。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q6. 診察料はいくらですか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.{" "}
              <span className="text-red-500 font-semibold">
                高い人でも初診時、1300円程度までです。
              </span>
              2回目以降は、800円程度までとなります。
              <br />
              治療内容にもよりますが、基本的に保険治療ですのでご安心ください。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q7. クレジットカードは使えますか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A. 現金・PayPayのみのお支払いとさせていただいております。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q8. 駐車場はありますか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A. はい、院の前に8~9台の駐車スペースがございます。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q9. 実費診療とは何ですか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.{" "}
              <span className="text-red-500 font-semibold">
                保険の適用外となる施術です。
              </span>
              ご希望や症状に応じて対応いたします。
              <br />
              初診5,000円、再診3,000円の料金がかかります。
              ※当院で治療中の方は初診料は必要ありません。
            </p>
          </li>
          <li>
            <strong className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md shadow-sm">
              Q10. 交通事故の際、整骨院でも自賠責保険で治療は受けられますか？
            </strong>
            <p className="mt-2 leading-relaxed text-base">
              A.{" "}
              <span className="text-red-500 font-semibold">
                交通事故によるケガの場合、自賠責保険を適用して治療を受けることができます。
              </span>
              <br />
              自賠責の保険を使用している期間中は施術費用はかかりません。病院での治療中でも転療も可能です。
            </p>
          </li>
        </ul>
      </section>
      <section className="my-10">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          アクセス
        </h3>
        <div className="mx-auto max-w-3xl h-[400px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="ながた整骨院 地図"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7849217895728!2d133.78294927690862!3d34.609599788093455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355156040d911a51%3A0xdc06dc4e013dd4f0!2z44CSNzEwLTAwNDgg5bKh5bGx55yM5YCJ5pW35biC56aP5bO277yR77yV77yT4oiS77yS77yR!5e0!3m2!1sja!2sjp!4v1748357355524!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
