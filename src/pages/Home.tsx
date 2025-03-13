import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Hi, I'm Andrew</h1>

      <p className="text-lg text-gray-600 mt-2">
        This is a modern React 19 setup with Vite & TypeScript.
      </p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Count: {count}
      </button>
    </div>
  );
}
