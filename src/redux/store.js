import { configureStore } from '@reduxjs/toolkit'
import searchRducer from './features/searchSlice';

export const store= configureStore({
   reducer:{
    search:searchRducer
   }
})