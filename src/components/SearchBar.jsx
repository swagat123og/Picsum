import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center gap-3 p-3 rounded-2xl bg-[#111827] border border-white/10 shadow-lg focus-within:ring-2 focus-within:ring-white/10 transition"
    >
      {/* Input */}
      <input
        type="text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search photos, videos, GIFs..."
        className="w-full bg-transparent px-4 py-3 text-sm text-gray-200 placeholder-gray-500 outline-none"
      />

      {/* Button */}
      <button
        type="submit"
        className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium
                   hover:bg-gray-200 active:scale-95 transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
