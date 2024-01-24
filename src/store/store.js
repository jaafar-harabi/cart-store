
import { configureStore } from '@reduxjs/toolkit'
import slice from '../features/Slice'

export const store =configureStore({
    reducer:{
        cart:slice
    }
    

})
 
