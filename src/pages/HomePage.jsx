import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero / Search Section */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Discover Stunning Media
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Search and save high-quality photos, videos, and GIFs in one place.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <SearchBar />
          </div>

          {/* Tabs */}
          <div className="mt-8 flex justify-center">
            <Tabs />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <ResultGrid />
      </main>
    </div>
  );
};

export default HomePage;
