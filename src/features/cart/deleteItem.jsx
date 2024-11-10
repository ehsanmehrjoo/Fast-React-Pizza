import React from 'react'
import Button from '../../Ui/Button'
import { useDispatch } from 'react-redux'
import { removeCart } from './cartSlice'

function DeleteItem({pizzaId}) {
    const dispatch = useDispatch()
  
    return (
        <Button type="small" onClick={() => dispatch(removeCart(pizzaId))}>Delete</Button>
    )
}

export default DeleteItem
