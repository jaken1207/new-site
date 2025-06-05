import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ながた整骨院</h3>
            <p className="text-gray-300 mb-4">
              当院ではご来院いただく患者様に、
              <br />
              心まで癒されていただけるよう、真心を込めて施術いたします。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">診療時間</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>月火木金: 8:00-12:30 / 15:00-19:00</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>水土: 8:00-12:30 / 実費診療</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>日祝: 休診</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>086-425-3478</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>岡山県倉敷市福島153-21</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ながた整骨院. All rights reserved.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="text-gray-400 hover:text-white">
              ホーム
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              当院について
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white">
              ブログ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
