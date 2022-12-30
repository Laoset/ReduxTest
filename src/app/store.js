//permite crear el store de mi aplicacion
import { configureStore } from '@reduxjs/toolkit'

//Reducers que me traigo por default del userSlice
import userReducer from '../reducers/user/userSlice'
import cartReducer from '../reducers/cart/cartSlice'

export default configureStore({
    //Al estado user se le asigna el userReducer
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
})