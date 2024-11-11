import { useDispatch, useSelector } from "react-redux";
 
import {formatCurrency} from "../../utilities/helpers"
 
import DeleteItem from "../cart/deleteItem";
import UpdateItemQuantity from "./UpdeteItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  console.log(currentQuantity);
  const dispatch = useDispatch()
  // function handleDelete(e){
  //   e.preventDefault()
  //   dispatch(removeCart(pizzaId))
  // }
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center  sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        {/* <Button type="small" onClick={handleDelete}>Delete</Button> */}
        <UpdateItemQuantity pizzaId={pizzaId} CurrentQuantity={quantity}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
