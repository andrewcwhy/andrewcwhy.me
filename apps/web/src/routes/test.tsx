import { createFileRoute } from "@tanstack/solid-router";
import { createSignal, Show } from "solid-js";

export const Route = createFileRoute("/test")({
  head: () => ({
    title: "Test - Signadex",
    meta: [
      {
        name: "description",
        content:
          "Interactive demonstration of SolidJS signals and conditional rendering.",
      },
    ],
  }),
  component: TestComponent,
});

function TestComponent() {
  // 💡 Signal to control the visibility of the welcome message
  const [showWelcome, setShowWelcome] = createSignal(true);

  // 💡 Signal to track the number of "assets" viewed
  const [viewedCount, setViewedCount] = createSignal(0);

  const handleToggle = () => {
    // Toggle the boolean signal
    setShowWelcome((prev) => !prev);
  };

  const handleViewAsset = () => {
    // Increment the count signal
    setViewedCount((prev) => prev + 1);
  };

  return (
    // Tailwind classes for a centered, clean container
    <div class="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <header class="text-center mb-10">
        <h1 class="text-4xl font-extrabold text-indigo-700">
          Signadex Dashboard
        </h1>
        <p class="text-gray-600 mt-2">
          Interactive demonstration of SolidJS reactivity.
        </p>
      </header>

      {/* 1. Toggle Button and Show Component */}
      <section class="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">
          Conditional Display
        </h2>

        <button
          onClick={handleToggle}
          // Tailwind classes for a styled, interactive button
          class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-150 shadow-md"
          type="button"
        >
          {/* Button label reacts to the state of the signal */}
          {showWelcome() ? "Hide Welcome Message" : "Show Welcome Message"}
        </button>

        <div class="mt-6 border-t pt-4 border-gray-200">
          {/* 🎭 Show component for conditional rendering with a fallback */}
          <Show
            when={showWelcome()}
            fallback={
              <div class="text-center text-gray-500 italic p-4">
                Welcome message is hidden. Click the button to display it.
              </div>
            }
          >
            {/* Child Element rendered when showWelcome() is true */}
            <div class="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-inner">
              <p class="font-medium">👋 Welcome back to the main page!</p>
              <p class="text-sm mt-1">
                This message is rendered using the SolidJS **&lt;Show&gt;**
                control flow component.
              </p>
            </div>
          </Show>
        </div>
      </section>

      {/* 2. Simple Count Demonstration */}
      <section class="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">
          Asset Tracking
        </h2>

        <p class="mb-4 text-lg text-gray-700">
          Assets Viewed Today:{" "}
          <span class="font-extrabold text-indigo-600">{viewedCount()}</span>
        </p>

        <button
          onClick={handleViewAsset}
          class="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-150 shadow-md"
          type="button"
        >
          Mark Asset as Viewed
        </button>
      </section>
    </div>
  );
}
