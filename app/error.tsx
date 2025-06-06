"use client";

import type React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

// Custom Button Component
function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const sizeClasses = size === "lg" ? "px-8 py-3 text-lg" : "px-4 py-2";
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      : "bg-green-600 text-white hover:bg-green-700";

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Error() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Error Display */}
        <div className="mb-12">
          <div className="">
            <h1 className="text-9xl md:text-[12rem] font-bold text-green-100 select-none">
              500
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サーバーエラーが発生しました
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            サーバー内部で予期しないエラーが発生しました。
          </p>
          <p className="text-gray-500">
            時間をおいて再度お試しいただくか、トップページへお戻りください。
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="h-5 w-5 mr-2" />
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
