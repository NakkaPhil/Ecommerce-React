import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getToken from '../../utils/getToken.js';
import  { isLoading } from './setLoading.slice';
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
		name: 'user',
        initialState: [],
        reducers: { //También llamados actions
            setUser: (state, action)=> {
                const user = action.payload
                return user
            }
        }
})

export const { setUser } = userSlice.actions; //Exportarlo macho

export default userSlice.reducer;