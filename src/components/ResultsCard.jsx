import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/features/collectionSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ResultsCard = ({ e }) => {
  const dispatch = useDispatch();
  const { lastAction, lastItem } = useSelector(
    (state) => state.collection
  );

  const title =
    typeof e.title === "string" ? e.title : e.title?.name || "Untitled";

  const addToCollection = () => {
    dispatch(addItem(e));
  };

  useEffect(() => {
    if (lastItem !== e.thumbnail) return; // 👈 only this card reacts

    if (lastAction === "exists") {
      toast.info("Already in your collection 📁");
    }
    if (lastAction === "added") {
      toast.success("Saved to collection ❤️");
    }
  }, [lastAction, lastItem]);

  return (
    <div className="group relative w-64 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      <img
        src={e.thumbnail}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />

      <span className="absolute top-2 left-2 px-2 py-1 text-xs rounded-full bg-black/70 text-white capitalize z-10">
        {e.type}
      </span>

      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2">
          {title}
        </h3>

        <button
          onClick={addToCollection}
          className="text-center text-sm font-medium py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Save {e.type}
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;
