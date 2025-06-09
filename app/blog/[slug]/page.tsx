import Image from "next/image";
import Link from "next/link";

import { Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/app/_comp/_ui/Button";
import { Badge } from "@/app/_comp/_ui/Badge";

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "shoulder-pain-causes": {
    title: "肩こりの原因と効果的な対処法",
    content: `
      <h2>肩こりの主な原因</h2>
      <p>現代社会において、肩こりは多くの方が抱える身近な悩みとなっています。主な原因として以下が挙げられます：</p>
      
      <h3>1. 長時間のデスクワーク</h3>
      <p>パソコン作業などで同じ姿勢を長時間続けることで、首や肩の筋肉が緊張し、血流が悪くなります。</p>
      
      <h3>2. ストレス</h3>
      <p>精神的なストレスは筋肉の緊張を引き起こし、肩こりの原因となります。</p>
      
      <h3>3. 運動不足</h3>
      <p>運動不足により筋力が低下し、正しい姿勢を保つことが困難になります。</p>
      
      <h2>効果的な対処法</h2>
      
      <h3>1. 定期的なストレッチ</h3>
      <p>1時間に1回程度、首や肩のストレッチを行いましょう。</p>
      
      <h3>2. 正しい姿勢の維持</h3>
      <p>デスクワーク時は、画面と目線の高さを合わせ、背筋を伸ばした姿勢を心がけましょう。</p>
      
      <h3>3. 適度な運動</h3>
      <p>ウォーキングや水泳など、全身を使った運動を定期的に行いましょう。</p>
      
      <h2>専門的な治療が必要な場合</h2>
      <p>セルフケアでも改善しない場合は、専門的な治療が必要です。当院では、患者様一人ひとりの症状に合わせた治療を行っております。</p>
    `,
    category: "症状解説",
    author: "田中院長",
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=800",
  },
  "sports-injury-prevention": {
    title: "スポーツ外傷を予防するためのストレッチ方法",
    content: `
      <h2>スポーツ外傷予防の重要性</h2>
      <p>スポーツを楽しむ上で、怪我の予防は非常に重要です。適切な準備運動とストレッチにより、多くのスポーツ外傷を防ぐことができます。</p>
      
      <h2>基本的なウォーミングアップ</h2>
      
      <h3>1. 軽いジョギング（5-10分）</h3>
      <p>体温を上げ、筋肉を温めることで、怪我のリスクを減らします。</p>
      
      <h3>2. 動的ストレッチ</h3>
      <p>関節の可動域を広げ、筋肉の柔軟性を高めます。</p>
      
      <h2>部位別ストレッチ方法</h2>
      
      <h3>下肢のストレッチ</h3>
      <ul>
        <li>ハムストリングストレッチ</li>
        <li>カーフストレッチ</li>
        <li>クワッドストレッチ</li>
      </ul>
      
      <h3>上肢のストレッチ</h3>
      <ul>
        <li>肩甲骨周りのストレッチ</li>
        <li>肩関節のストレッチ</li>
        <li>前腕のストレッチ</li>
      </ul>
      
      <h2>クールダウンの重要性</h2>
      <p>運動後のクールダウンも怪我の予防には欠かせません。静的ストレッチを中心に、筋肉の緊張をほぐしましょう。</p>
    `,
    category: "スポーツ",
    author: "佐藤副院長",
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=800",
  },
  "lower-back-pain-exercises": {
    title: "腰痛改善のための簡単エクササイズ",
    content: `
      <h2>腰痛の現状</h2>
      <p>腰痛は日本人の多くが経験する症状で、適切なエクササイズにより改善が期待できます。</p>
      
      <h2>自宅でできる腰痛改善エクササイズ</h2>
      
      <h3>1. キャット&カウエクササイズ</h3>
      <p>四つん這いの姿勢で背中を丸めたり反らしたりする運動です。腰椎の柔軟性を高めます。</p>
      
      <h3>2. 膝抱えストレッチ</h3>
      <p>仰向けに寝て膝を胸に引き寄せるストレッチです。腰部の筋肉をリラックスさせます。</p>
      
      <h3>3. プランク</h3>
      <p>体幹を強化することで、腰部への負担を軽減します。</p>
      
      <h2>注意点</h2>
      <ul>
        <li>痛みが強い時は無理をしない</li>
        <li>継続することが重要</li>
        <li>症状が改善しない場合は専門医に相談</li>
      </ul>
      
      <h2>まとめ</h2>
      <p>腰痛の改善には、適切なエクササイズと生活習慣の見直しが重要です。当院では、患者様の症状に合わせた運動指導も行っております。</p>
    `,
    category: "運動療法",
    author: "山田スタッフ",
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=800",
  },
  "traffic-accident-treatment": {
    title: "交通事故後の治療について知っておくべきこと",
    content: `
      <h2>交通事故後の症状</h2>
      <p>交通事故後は、事故直後に症状が現れない場合もあります。以下のような症状が現れることがあります：</p>
      
      <ul>
        <li>むち打ち症</li>
        <li>腰痛</li>
        <li>頭痛</li>
        <li>めまい</li>
        <li>手足のしびれ</li>
      </ul>
      
      <h2>治療の流れ</h2>
      
      <h3>1. 初診・検査</h3>
      <p>詳しい問診と検査により、症状の程度を把握します。</p>
      
      <h3>2. 治療計画の立案</h3>
      <p>患者様の症状に合わせた治療計画を作成します。</p>
      
      <h3>3. 治療の実施</h3>
      <p>手技療法、物理療法などを組み合わせた治療を行います。</p>
      
      <h2>自賠責保険について</h2>
      <p>交通事故による怪我の治療には、自賠責保険が適用されます。窓口負担0円で治療を受けることができます。</p>
      
      <h3>必要な書類</h3>
      <ul>
        <li>事故証明書</li>
        <li>相手方保険会社の連絡先</li>
        <li>診断書</li>
      </ul>
      
      <h2>早期治療の重要性</h2>
      <p>交通事故後の症状は、早期に適切な治療を受けることで、後遺症を防ぐことができます。症状が軽くても、まずはご相談ください。</p>
    `,
    category: "交通事故",
    author: "田中院長",
    date: "2023-12-28",
    image: "/placeholder.svg?height=400&width=800",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              ブログ一覧に戻る
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="relative h-64 md:h-96 w-full mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-6 bg-green-50 rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            お困りの症状はありませんか？
          </h3>
          <p className="text-gray-600 mb-6">
            当院では患者様一人ひとりに合わせた治療を行っております。
            お気軽にご相談ください。
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            ご予約・お問い合わせ
          </Button>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: "shoulder-pain-causes" },
    { slug: "sports-injury-prevention" },
    { slug: "lower-back-pain-exercises" },
    { slug: "traffic-accident-treatment" },
  ];
}

export const dynamicParams = false;
