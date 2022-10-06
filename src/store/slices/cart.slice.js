import { createSlice } from '@reduxjs/toolkit';
import getToken from '../../utils/getToken';
import { isLoading } from './setLoading.slice';
import axios from 'axios'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartSlice = createSlice({
		name: 'cart',
        initialState: [],
        reducers: { //También llamados actions
            setCart: (state, action)=> {
                    return action.payload
                   /* if(v){
                        console.log('El producto está en el carrito')
                    }else{
                        console.log('El producto NO está en el carrito')
                    }
                    */
                    //state.push(cart)
                    
            }
        }
})

export const getCartThunk = ()=> (dispach) => {
    dispach(isLoading(true))
    return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getToken())
    .then((res)=> dispach(setCart(res.data.data.cart.products)))
    .finally(()=> dispach(isLoading(false)))
}

export const addCartThunk = (cart)=> dispach => {
    dispach(isLoading(true))
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', cart, getToken())
    .then(()=> dispach(getCartThunk()))
    .finally(()=> dispach(isLoading(false)))
    
}

export const purchaseCartThunk = ()=> (dispach) => {
    dispach(isLoading(true))
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getToken())
    .then(dispach(setCart([])))
    dispach(isLoading(false))
    
}

export const removeFromCartThunk = (id) => (dispach) => {
    dispach(isLoading(true))
    axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, {}, getToken())
    .then(dispach(getCartThunk()))
    .finally(()=> dispach(isLoading(false)))
}

export const {setCart } = cartSlice.actions; //Exportarlo macho

export default cartSlice.reducer;