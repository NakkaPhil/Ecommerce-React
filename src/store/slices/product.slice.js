import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { isLoading } from './setLoading.slice';
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productSlice = createSlice({
		name: 'product',
        initialState: [],
        reducers: { //También llamados actions
            setProduct: (state, action)=> {
                    const product = action.payload
                    return product
            }
        }
})

export const setProductThunk = (product) => dispach => {
    dispach(isLoading(true))
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${product.id}`)
    .then(res =>  dispach(setProduct(res.data.data.product)))
    .finally(dispach(isLoading(false)))
}

export const { setProduct } = productSlice.actions; //Exportarlo macho

export default productSlice.reducer;