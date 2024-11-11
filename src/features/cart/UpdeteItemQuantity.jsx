import React from 'react'
import Button from '../../Ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCartQuantity, increasCartQuantity } from './cartSlice'




function UpdateItemQuantity({pizzaId , CurrentQuantity}) {
    const dispatch = useDispatch()
   const quantity = useSelector(state => state.cart.cart)
   console.log(quantity);
  return (
    <div className='flex gap-2 items-center md:gap-3'> 
    <Button type="round" onClick={() => dispatch(decreaseCartQuantity(pizzaId)) }>-</Button>
    <span className="text-sm font-medium">{CurrentQuantity}</span>  
    <Button type="round" onClick={() => dispatch(increasCartQuantity(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity