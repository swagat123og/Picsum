import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gifs"];
  const dispatch = useDispatch();
  const activeTabs = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex items-center gap-1 rounded-2xl bg-[#111827] border border-white/10 p-1 shadow-inner">
      {tabs.map((e, idx) => {
        const isActive = activeTabs === e;

        return (
          <button
            key={idx}
            onClick={() => dispatch(setActiveTabs(e))}
            className={`
              px-5 py-2 text-sm font-medium capitalize rounded-xl
              transition-all duration-200
              ${
                isActive
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
              active:scale-95
            `}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
