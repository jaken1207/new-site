import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_comp/_ui/card";
import { Users } from "lucide-react";

export default function AboutPage() {
  const staff = [
    {
      name: "永田 正太郎",
      role: "院長、柔道整復師",
      message: "患者様一人ひとりに寄り添った治療を心がけております。",
    },
    {
      name: "永田 寿子",
      role: "スタッフ",
      message: "女性の患者様も安心してご相談ください。",
    },
  ];

  const treatmentSteps = [
    {
      step: 1,
      title: "問診と検査",
      description:
        "問診票を確認し、症状を詳しくお伺いします。小さなことでも遠慮なくご相談ください。",
      image: "/treat1.jpg",
    },
    {
      step: 2,
      title: "手技療法",
      description:
        "骨・関節・筋肉を整え、自然治癒力を最大限に引き出す施術を行います。無痛で心地よい施術です。",
      image: "/treat2.jpg",
    },
    {
      step: 3,
      title: "物理療法",
      description:
        "治療機器を使って、筋肉や関節の緊張を和らげ、痛みの軽減を図ります。",
      image: "/treat3.jpg",
    },
    {
      step: 4,
      title: "症状説明",
      description:
        "症状や治療内容、今後の通院計画や注意点などをわかりやすく丁寧にご説明します。",
      image: "/treat4.jpg",
    },
  ];

  const testimonials = [
    {
      name: "50代 男性",
      condition: "肩痛",
      comment:
        "社会人バレーのコーチをされているFさん。左肩が上がらず、サーブができるようになるのが目標。夏から週1〜2回の治療と、自宅での段階ごとのストレッチを続け、今では軽いサーブが可能に。チームと共に週2回の練習を継続されています。",
    },
    {
      name: "70代 女性",
      condition: "膝痛",
      comment:
        "2週間前に娘に連れられて来院。足の痛みで歩行も自転車も困難でしたが、現在は自転車で通院。草取り時の痛みはあるものの、日常の自由が戻ってきたとのことです。",
    },
    {
      name: "20代 男性",
      condition: "スポーツ外傷",
      comment:
        "サッカーで怪我をした際にお世話になりました。早期復帰できて感謝しています。",
    },
    {
      name: "60代 女性",
      condition: "交通事故後遺症",
      comment:
        "追突事故後、首から背中にかけての痛みで寝たきりに。友人に勧められて来院し、10日後には仕事復帰が見えてきました。早めの治療が効果的だったそうです。",
    },
    {
      name: "60代 女性",
      condition: "腰痛",
      comment:
        "ぎっくり腰になり旅行を諦めかけましたが、治療の継続で旅行も無事実現。趣味のダンスも再開できました。",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Staff Introduction */}
      <section className="my-16 max-w-4xl mx-auto ">
        <div className="text-center mb-12 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            スタッフ紹介
          </h2>
          <p className="text-gray-600">
            経験豊富なスタッフが皆様をサポートします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-8">
          {staff.map((member, index) => (
            <Card
              key={index}
              className="text-center border border-gray-200 shadow-sm"
            >
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-green-600 font-semibold">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 italic">
                  "{member.message}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Treatment Process */}
      <section className="mb-16 bg-green-50 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              治療の流れ
            </h2>
            <p className="text-gray-600">
              個々の状態や症状にあわせて手技や治療器を用いて施術を行います。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border border-gray-200 shadow-sm bg-white"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">
                      {step.step}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <div className="mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      className="block max-w-45 mx-auto rounded-md"
                      width={500}
                      height={300}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Manual Therapy Service */}
      <section className="mb-16 m-8">
        <div className="max-w-5xl mx-auto ">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-800">
                予約整体治療について
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  このような方におすすめ
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    時間通りに施術してほしい
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    時間をかけて、ゆっくり診てほしい
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    他の人と一緒だと恥ずかしい　など
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    診療の詳細
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong className="text-blue-700">実施時間：</strong>
                      水・土（15:00〜19:00）
                    </li>
                    <li>
                      <strong className="text-blue-700">予約制：</strong>
                      当院受付またはお電話にてご予約ください
                    </li>
                    <li>
                      <strong className="text-blue-700">保険適用外：</strong>
                      自費診療となります
                    </li>
                    <li>※当院で治療中の方は初診料は必要ありません</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 flex-1">
                      料金
                    </h3>
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <strong className="text-blue-700">初診：</strong>
                      <span className="text-xl font-bold text-blue-800">
                        7,000円
                      </span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <strong className="text-blue-700">再診：</strong>
                      <span className="text-xl font-bold text-blue-800">
                        4,000円
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="p-8 bg-green-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">患者様の声</h2>
          <p className="text-gray-600">
            実際に治療を受けられた患者様からのお声をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm bg-white"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                  </div>
                  <CardDescription>{testimonial.condition}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
