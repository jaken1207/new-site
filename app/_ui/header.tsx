import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between px-6 py-4 space-y-2 md:space-y-0">
        {/* 左側: ロゴ */}
        <h1 className="flex items-center space-x-2">
          <span className="font-extrabold text-4xl">ながた整骨院</span>
        </h1>

        {/* 中央: ナビゲーション */}
        <nav className="space-x-6 text-gray-700 text-sm md:text-base">
          <Link href="/" className="hover:text-red-400 transition-colors">
            ホーム
          </Link>
          <Link href="/about" className="hover:text-red-400 transition-colors">
            当院について
          </Link>
          <Link
            href="/services"
            className="hover:text-red-400 transition-colors"
          >
            診療内容
          </Link>
        </nav>
        <div className="text-sm text-gray-700 md:text-right">
          <div>📞 086-425-3478</div>
          <div>〒710-0048 岡山県倉敷市福島 153-21</div>
        </div>
      </div>
    </header>
  );
};

export default header;
