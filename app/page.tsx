import HeroImage from "./_comp/HeroImage";
import BusinessHours from "./_comp/BusinessHours";
import FAQSection from "./_comp/FAQSection";
import AccessMap from "./_comp/AccessMap";

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
      {/* Hero Image */}
      <HeroImage />
      {/* Business Hours */}
      <BusinessHours />
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      {/* Access Map */}
      <AccessMap />
    </div>
  );
}
