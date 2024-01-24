import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';


import 'react-toastify/dist/ReactToastify.css';
const initialState={
    cart:[],
    item:{id: 1,
    title: "Schoes",
    price: 100,
    img: "https://cdn.dribbble.com/users/722843/screenshots/6462327/dribbble.gif",
    quantity: 1},
    quantity:0
}

const Slice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add : (state,action)=>{
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
              state.cart[find].quantity += 1;
              state.quantity+=1
              toast.success('Add it to cart')
            } else {
              state.cart.push(action.payload);
              state.quantity+=1
              toast.success('Add it to cart')
              

            }},
        remove: (state,action)=>{
            let find = state.quantity
            if (find>0){
               state.cart[0].quantity-=1
               state.quantity-=1
               toast.success('Delete it from cart')
            }else{
                toast.error('Cart is empty')
            }
          
        }


        }
    }

)

export const {
add,remove
} = Slice.actions

export default Slice.reducer