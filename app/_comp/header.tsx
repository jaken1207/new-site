"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "ホーム", href: "/" },
    { name: "当院について", href: "/about" },
    { name: "お知らせ", href: "/" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src={"/logo.png"}
              alt="ながた整骨院のロゴ"
              width={30}
              height={30}
              className="mr-1 "
            />
            <Link href="/" className="text-2xl font-bold text-gray-700">
              ながた整骨院
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-green-700">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">086-425-3478</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center text-green-700 pt-4">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">086-425-3478</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
