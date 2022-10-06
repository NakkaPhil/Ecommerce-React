import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
import productSlice from './slices/product.slice'
import productsSlice from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'
import  isLoadingSlice  from './slices/setLoading.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice,
        product: productSlice,
        purchases: purchasesSlice,
        user: userSlice,
        cart: cartSlice
    }
})
