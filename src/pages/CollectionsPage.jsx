import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCollectionItem,
  clearCollection,
} from "../redux/features/collectionSlice";
import { toast } from "react-toastify";

const CollectionsPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  const removeItem = (thumb) => {
    dispatch(removeCollectionItem(thumb));
    toast.error("Removed from collection ❌");
  };

  const clearAll = () => {
    dispatch(clearCollection());
    toast.warn("Collection cleared 🗑️");
  };

  if (collection.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-gray-400">
        <h2 className="text-2xl font-semibold mb-2">No Collections Yet</h2>
        <p>Save images, videos, or GIFs to see them here ✨</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Your Collection</h1>

        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {collection.map((item) => {
          const title =
            typeof item.title === "string"
              ? item.title
              : item.title?.name || "Untitled";

          return (
            <div
              key={item.thumbnail}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-900"
            >
              <img
                src={item.thumbnail}
                alt={title}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />

              <span className="absolute top-3 left-3 px-2 py-1 text-xs rounded-full bg-black/70 text-white capitalize z-10">
                {item.type}
              </span>

              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition z-10">
                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-3">
                  {title}
                </h3>

                <div className="flex gap-2">
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-sm py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Open
                  </a>

                  <button
                    onClick={() => removeItem(item.thumbnail)}
                    className="px-3 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionsPage;
