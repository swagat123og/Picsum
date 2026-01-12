import React from 'react'
import { fetchGif, fetchPhoto, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'


const App = () => {

  const getPhoto = async () => {
    try {
      const data = await fetchPhoto('dog')
      console.log(data.results)
    } catch (err) {
      console.error(err.message)
    }
  }

  const getVideo = async () => {
    try {
      const data = await fetchVideos('cat')
      console.log(data.videos)
    } catch (err) {
      console.error(err.message)
    }
  }

   const getGif = async () => {
    try {
      const data = await fetchGif('cat')
      console.log(data.data.results)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <SearchBar/>
    </div>
  )
}

export default App
