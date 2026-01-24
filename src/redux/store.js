import { configureStore } from '@reduxjs/toolkit'
import searchRducer from './features/searchSlice';
import collectionReducer from './features/collectionSlice';
export const store= configureStore({
   reducer:{
    search:searchRducer
      ,collection:collectionReducer
   }
})