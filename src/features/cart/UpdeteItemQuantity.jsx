import React from 'react'
import Button from '../../Ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseCartQuantity, increasCartQuantity } from './cartSlice'




function UpdateItemQuantity({pizzaId}) {
    const dispatch = useDispatch()
  return (
    <div className='flex gap-1 items-center md:gap-3'> 
    <Button type="round" onClick={() => dispatch(decreaseCartQuantity(pizzaId)) }>-</Button>
    <Button type="round" onClick={() => dispatch(increasCartQuantity(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity