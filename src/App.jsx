import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white  ">
       

       <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        theme="dark"
      />
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Media<span className="text-blue-500">Search</span>
            </h1>
            <p className="text-xs text-gray-400">
              Search photos, videos & GIFs instantly
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/collections"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Collections
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Pages */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} MediaSearch. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
