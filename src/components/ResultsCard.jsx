import React from "react";

const ResultsCard = ({ e }) => {
  // ✅ Ensure title is always a string
  const title =
    typeof e.title === "string"
      ? e.title
      : e.title?.name || "Untitled";

  return (
    <div className="group relative w-64 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">

      {/* Full-cover Image with Lazy Loading */}
      <img
        src={e.thumbnail}
        alt={title}
        loading="lazy"                 // ✅ Native lazy loading
        decoding="async"               // ✅ Non-blocking decode
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />

      {/* Media type badge */}
      <span className="absolute top-2 left-2 px-2 py-1 text-xs rounded-full bg-black/70 text-white capitalize z-10">
        {e.type}
      </span>

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2">
          {title}
        </h3>

        <a
          href={e.src}
          target="_blank"
          rel="noreferrer"
          className="text-center text-sm font-medium py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Save {e.type}
        </a>
      </div>
    </div>
  );
};

export default ResultsCard;
