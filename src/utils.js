
import store from "./store/index"
import { clearCart } from "./reducers/cartSlice"



export const handleClear = () =>{
    store.dispatch(clearCart())
   }
