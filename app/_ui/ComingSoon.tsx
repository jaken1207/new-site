export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 text-gray-700 px-4">
      <svg
        className="w-20 h-20 mb-6 text-yellow-400 animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="{2}"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-4xl font-bold mb-2">Coming Soon</h2>
      <p className="text-lg text-gray-500 max-w-md text-center">
        ただいま準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
