import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'
const Tabs = () => {
  const tabs = ['Photos', 'Videos', 'GIFs']
  const dispatch=useDispatch();
  const activeTabs=useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-xl w-fit">
      {tabs.map((e, idx) => {
        return (
          <button
            key={idx}
            className={`${(activeTabs==e)?'bg-amber-500':'bg-green-600'} px-5 py-2 rounded-lg
              text-sm font-medium
              text-gray-300
              hover:text-white
              focus:outline-none
              active:scale-95
              cursor-pointer`}
            onClick={()=>{
              dispatch(setActiveTabs(e))
            }}
          >
            {e}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
