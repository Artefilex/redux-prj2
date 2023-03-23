import React from 'react'
import {ChevronDown, ChevronUp} from "../../json/itemIcon"
 
 import { useDispatch} from 'react-redux'
 import { increase, decrease,removeItem } from '../../reducers/cartSlice'
const CartItem = ({id ,img ,title , price , amount}) => {
   
 
    const dispacth = useDispatch()
   
    return (
    <div>
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4> {title} </h4>
                <h4 className='item-price'>${price}</h4>
                <button onClick={()=>dispacth(removeItem(id))} className='remove-btn'> remove</button>
            </div>
            <div>
                <button onClick={()=> dispacth(increase({id}))} className='amount-btn'> <ChevronUp/></button>
                <p className='amount'>{amount}</p>
                <button onClick={()=>{
                    if(amount === 1){
                        dispacth(removeItem(id))
                        return
                    }
                    dispacth(decrease({id}))
                }} 
                className='amount-btn'> <ChevronDown/> </button>
            </div>
        </article>
    </div>
  )
}

export default CartItem