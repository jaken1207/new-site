import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_comp/header";
import Footer from "./_comp/footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "800"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | ながた整骨院",
    default: "トップページ｜ながた整骨院",
  },
  description:
    "ながた整骨院は、岡山県倉敷市にある整骨院です。地域の皆様の健康をサポートするために、最新の医療技術と温かいサービスを提供しています。駐車場8台ございます。腰痛、肩こり、スポーツ障害など、どんなお悩みでもお気軽にご相談ください。院長は永田正太郎で、30年以上の経験を持つ柔道整復師です。",
  keywords: [
    "整骨院",
    "腰痛",
    "肩こり",
    "倉敷",
    "整体",
    "ながた整骨院",
    "岡山",
  ],
  authors: [{ name: "ながた整骨院" }],
  creator: "ながた整骨院",
  openGraph: {
    title: "ながた整骨院｜倉敷の地域密着型整骨院",
    description:
      "倉敷市のながた整骨院では、腰痛・肩こり・スポーツ障害などに対応。最新技術と丁寧な施術で地域の健康を支えます。",
    url: "https://nagata-seikotsuin.org",
    siteName: "ながた整骨院",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://nagata-seikotsuin.org/main.png",
        width: 800,
        height: 333,
        alt: "ながた整骨院の外観と施術の様子",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className}`}>
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
