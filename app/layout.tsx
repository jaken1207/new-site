import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_ui/header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "800"],
});
export const metadata: Metadata = {
  title: "ながた整骨院のホームページへようこそ",
  description:
    "ながた整骨院は、地域の皆様の健康をサポートするために、最新の医療技術と温かいサービスを提供しています。",
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
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="bg-white text-center py-4 mt-10">
          <small>&copy; {new Date().getFullYear()} ながた整骨院</small>
        </footer>
      </body>
    </html>
  );
}
