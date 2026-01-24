import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gifs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.search.activeTab);

  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`px-4 py-2 rounded-xl ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
