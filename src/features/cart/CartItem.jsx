import Button from "../../Ui/Button";
import {formatCurrency} from "../../utilities/helpers"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 flex items-center justify-between ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center space-x-6">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
