import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getToken from '../../utils/getToken.js';
import  { isLoading } from './setLoading.slice';
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchasesSlice = createSlice({
		name: 'purchases',
        initialState: [],
        reducers: { //También llamados actions
            setPurchases: (state, action)=> {
                const purchases = action.payload
                return purchases
            }
        }
})

export const getPurchasesThunk = ()=> dispatch => {
    dispatch(isLoading(true))
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getToken())
            .then(res => dispatch(setPurchases(res.data.data.purchases)))
            .finally(()=> dispatch(isLoading(false)))    
}

export const { setPurchases } = purchasesSlice.actions; //Exportarlo macho

export default purchasesSlice.reducer;