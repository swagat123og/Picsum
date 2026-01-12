import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGif, fetchPhoto, fetchVideos } from '../api/mediaApi'
import { setError, setLoading, setQuery, setResults } from '../redux/features/searchSlice'

const ResultGrid = () => {
    const {query,activeTab,results,loading, error}=useSelector((store)=>store.search);
    const dispatch=useDispatch();
     const getData= async ()=>{
         if(activeTab=='photos'){
          const data=await fetchPhoto(query);
          console.log(data);
         }
     }
  return (
    <div>
      <button onClick={getData}>click me</button>
    </div>
  )
}

export default ResultGrid
