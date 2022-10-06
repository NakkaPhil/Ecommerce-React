import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isLoadingSlice = createSlice({
		name: 'isLoading',
        initialState: true,
        reducers: { //También llamados actions
            isLoading: (state, action)=> {
                const loading = action.payload
                return loading
            }
        }
})

export const { isLoading } = isLoadingSlice.actions; //Exportarlo macho

export default isLoadingSlice.reducer;