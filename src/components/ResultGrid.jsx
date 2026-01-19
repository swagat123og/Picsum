import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhoto, fetchVideos } from "../api/mediaApi";
import { setError, setLoading, setResults } from "../redux/features/searchSlice";
import ResultsCard from "./ResultsCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query?.trim()) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab == "photos") {
          let response = await fetchPhoto(query);
          data = response.results.map((e) => ({
            id: e.id,
            type: "photo",
            title: e.alt_description,
            thumbnail: e.urls.small,
            src: e.urls.full,
          }));
        }

        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((e) => ({
            id: e.id,
            type: "video",
            title: e.user || "video",
            thumbnail: e.image,
            src: e.video_files[0].link,
          }));
        }

        if (activeTab == "gifs") {
          let response = await fetchGif(query);
          data = response.data.results.map((e) => ({
            id: e.id,
            type: "gif",
            title: e.title || "GIF",
            thumbnail: e.media_formats.tinygif.url,
            src: e.media_formats.gif.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  /* ---------- UI STATES (STYLING ONLY) ---------- */
  if (loading)
    return (
      <div className="flex items-center justify-center py-24 text-gray-400 text-sm tracking-wide">
        Loading results...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center py-24 text-red-400 text-sm">
        Something went wrong. Try again.
      </div>
    );

  /* ---------- RESULTS GRID ---------- */
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 px-6 py-8">
      {results.map((e, idx) => (
        <ResultsCard key={idx} e={e} />
      ))}
    </div>
  );
};

export default ResultGrid;
