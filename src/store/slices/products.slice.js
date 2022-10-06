import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { isLoading } from './setLoading.slice';
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
		name: 'products',
        initialState: [],
        reducers: { //También llamados actions
            setProducts: (state, action)=> {
                    const product = action.payload
                    return product
            }
        }
})

export const setProductsThunk = () => dispach => {
    dispach(isLoading(true))
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res =>  dispach(setProducts(res.data.data.products)))
    .finally(dispach(isLoading(false)))
}

export const { setProducts } = productsSlice.actions; //Exportarlo macho

export default productsSlice.reducer;