import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Header / Hero Section */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Media<span className="text-blue-500">Search</span>
          </h1>
          <p className="text-sm text-gray-400">
            Search photos, videos and GIFs instantly
          </p>

          <SearchBar />
          <Tabs />
        </div>
      </header>

      {/* Results Section */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <ResultGrid />
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} MediaSearch. All rights reserved.
      </footer>

    </div>
  );
};

export default App;
