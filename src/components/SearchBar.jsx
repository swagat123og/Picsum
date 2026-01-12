import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';
const SearchBar = () => {


  const[text,setText]=useState('');
  const dispatch=useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form className="flex items-center gap-3 p-4 rounded-xl shadow-lg"
      onSubmit={(e)=>{
       submitHandler(e)
      }}>
      <input
        type="text"
        required
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
        placeholder="Enter the text"
        className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   transition"
      />

      <button
        className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg
                   hover:bg-indigo-700 active:scale-95 transition"
      >
        Search
      </button>
    </form>
    </div>
  )
}

export default SearchBar
