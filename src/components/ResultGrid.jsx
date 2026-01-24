import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhoto, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
  nextPage,
} from "../redux/features/searchSlice";
import ResultsCard from "./ResultsCard";

const ResultGrid = () => {
  const search = useSelector((s) => s.search || {});
  const {
    query = "",
    activeTab = "photos",
    results = [],
    loading = false,
    error = null,
    page = 1,
    hasMore = false,
  } = search;

  const dispatch = useDispatch();

  // 🛑 Nothing searched
  if (typeof query !== "string" || !query.trim()) {
    return (
      <p className="text-center text-gray-500 py-20">
        Start typing to search photos, videos or GIFs 🔍
      </p>
    );
  }

  useEffect(() => {
    if (!query.trim()) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab === "photos") {
          const res = await fetchPhoto(query, page);
          data = res?.results?.map((e) => ({
            id: e.id,
            type: "photo",
            title: e.alt_description,
            thumbnail: e.urls.small,
            src: e.urls.full,
          })) || [];
        }

        if (activeTab === "videos") {
          const res = await fetchVideos(query, page);
          data = res?.videos?.map((e) => ({
            id: e.id,
            type: "video",
            title: e.user?.name || "Video",
            thumbnail: e.image,
            src: e.video_files?.[0]?.link,
          })) || [];
        }

        if (activeTab === "gifs") {
          const res = await fetchGif(query, page);
          data = res?.results?.map((e) => ({
            id: e.id,
            type: "gif",
            title: e.title || "GIF",
            thumbnail: e.media_formats?.tinygif?.url,
            src: e.media_formats?.gif?.url,
          })) || [];
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err?.message || "Failed to load data"));
      }
    };

    getData();
  }, [query, activeTab, page, dispatch]);

  if (loading && page === 1)
    return <p className="text-center text-gray-400 py-20">Loading...</p>;

  if (error)
    return <p className="text-center text-red-400 py-20">{error}</p>;

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
        {results.map((e) => (
          <ResultsCard key={e.id} e={e} />
        ))}
      </div>

      {query.trim() && hasMore && !loading && results.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => dispatch(nextPage())}
            className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Load More
          </button>
        </div>
      )}

      {loading && page > 1 && (
        <p className="text-center text-gray-400 mt-6">Loading more...</p>
      )}
    </>
  );
};

export default ResultGrid;
