import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./_comp/_ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./_comp/_ui/accordion";

export default function HomePage() {
  const faqs = [
    {
      question: "どんな施術ですか？",
      answer:
        "お客さんひとりひとりの症状に応じ、その時の最も適した施術をいたします。\n特に「ソフト・無痛・心地よい手技療法」を重要視しており、物理療法と手技治療を行います。\n患者様の身体に合った施術を行っていますので、安心してご来院ください。",
    },
    {
      question: "予約制ですか？",
      answer:
        "予約なしでも施術可能ですが、予約優先とさせていただいております。\nなお、水曜・土曜の午後は実費診療となりますので、事前にご連絡ください。",
    },
    {
      question: "健康保険は使えますか？",
      answer:
        "保険適用は可能です。健康保険証かマイナンバーカードを忘れずにお持ちください。\n当院では、交通事故、各種保険、生活保護等による治療を行っております。",
    },
    {
      question: "施術時間はどれくらいですか？",
      answer: "初回は40〜50分、2回目以降は30〜40分程度です。",
    },
    {
      question: "どのような症状に対応していますか？",
      answer:
        "肩こり、腰痛、膝の痛み、スポーツ障害、交通事故後のケアなど、幅広い症状に対応しています。",
    },
    {
      question: "診察料はいくらですか？",
      answer:
        "初診時、1500円程度までです。2回目以降は、900円程度までとなります。\n治療内容にもよりますが、基本的に保険治療ですのでご安心ください。",
    },
    {
      question: "クレジットカードは使えますか？",
      answer: "現金・PayPayのみのお支払いとさせていただいております。",
    },
    {
      question: "駐車場はありますか？",
      answer: "はい、院の前に8~9台の駐車スペースがございます。",
    },
    {
      question: "実費診療とは何ですか？",
      answer:
        "保険の適用外となる施術です。ご希望や症状に応じて対応いたします。\n初診7,000円、再診4,000円の料金がかかります。\n※当院で治療中の方は初診料は必要ありません。",
    },
    {
      question: "交通事故の際、整骨院でも自賠責保険で治療は受けられますか？",
      answer:
        "交通事故によるケガの場合、自賠責保険を適用して治療を受けることができます。\n自賠責の保険を使用している期間中は施術費用はかかりません。病院での治療中でも転療も可能です。",
    },
  ];

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

      {/* Business Hours */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg rounded-lg border-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2 text-green-600" />
                  <h2 className="text-2xl">診療時間のご案内</h2>
                </CardTitle>
                <p className="text-gray-600 text-center mt-2">
                  診療時間の10分前を目安にご来院ください。
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium">月・火・木・金</span>
                    <span>8:30-12:30 / 15:00-19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium">水・土</span>
                    <span>8:30-12:30 / 15:00-（実費診療）</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium">日・祝</span>
                    <span className="text-red-600">休診</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col items-center gap-2">
                  <p className="text-gray-600 text-center mt-2">
                    予約優先での診療を行っております。お気軽にご連絡ください。
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <Phone className="h-5 w-5 mr-2 text-green-600" />
                    <span className="text-xl font-bold text-green-700">
                      086-425-3478
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded text-center">
                  <strong>お知らせ：</strong>直近のお知らせはありません。
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-gray-600">
              患者様からよくいただくご質問にお答えします
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                className="border-b border-gray-200 "
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-gray-700 font-bold  hover:no-underline hover:text-green-700">
                  Q{index + 1}: {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Access Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">アクセス</h2>
            <p className="text-gray-600">お気軽にお越しください</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="bg-white shadow-lg rounded-lg border-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-green-600" />
                    <h1>ながた整骨院</h1>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">住所</h4>
                      <p className="text-gray-600">
                        〒710-0048 岡山県倉敷市福島153-21
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">電話番号</h4>
                      <p className="text-gray-600">086-425-3478</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">最寄り駅</h4>
                      <p className="text-gray-600">山陽本線 倉敷駅 車5分</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">駐車場</h4>
                      <p className="text-gray-600">専用駐車場8台完備</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="min-h-93 bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe
                className="bg-white shadow-lg rounded-lg border-gray-50"
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
          </div>
        </div>
      </section>
    </div>
  );
}
