import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGif, fetchPhoto, fetchVideos } from '../api/mediaApi'
import { setError, setLoading, setQuery, setResults } from '../redux/features/searchSlice'

const ResultGrid = () => {
    const {query,activeTab,results,loading, error}=useSelector((store)=>store.search);
    const dispatch=useDispatch()
    useEffect(()=>{
      if (!query?.trim()) return; // ⬅️ prevent empty API calls
       const getData= async ()=>{
        try{
          dispatch(setLoading())
         let data=[];
         if(activeTab=='photos'){
          let response=await fetchPhoto(query);
          data=response.results.map((e)=>({
            id:e.id,
            type:'photo',
            title:e.alt_description,
            thumbnail:e.urls.small,
            src:e.urls.full

          }))
         }
         if(activeTab=='videos'){
          let response=await fetchVideos(query);
          data=response.videos.map((e)=>({
            id:e.id,
            type:'video',
            title:e.user || 'video',
            thumbnail:e.image,
            src:e.video_files[0].link
          }))
         }
         if(activeTab=='gifs'){
          let response=await fetchGif(query);
          data=response.data.results.map((e)=>({
            id:e.id,
            type:'gif',
            title:e.title || 'GIF',
            thumbnail:e.media_formats.tinygif.url,
            src:e.media_formats.gif.url
          }))
         }
          dispatch(setResults(data));
        }catch(err){
          dispatch(setError(err.message))
        }
     }
     getData()
    },[query,activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading....</h1>
     
  return (
    <div>
    </div>
  )
}

export default ResultGrid
