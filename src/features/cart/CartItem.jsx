import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import {formatCurrency} from "../../utilities/helpers"
import { removeCart } from "./cartSlice";
import DeleteItem from "../cart/deleteItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

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
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
