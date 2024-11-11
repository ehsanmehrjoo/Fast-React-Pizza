import PropTypes from "prop-types";
import { formatCurrency } from "../../utilities/helpers";
import Button from "../../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/deleteItem";
import UpdateItemQuantity from "../cart/UpdeteItemQuantity";
 
 

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

     const dispatch = useDispatch();

    function handleAddToCart(){
      const newItem =  {
        pizzaId :id,
        name ,
        quantity: 1,
        unitPrice ,
        totalPrice: unitPrice * 1,
    }
    dispatch(addCart(newItem))
    
    }
  return (
    <li className="flex  gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale ' : ''} `} />
      <div className="flex flex-col  grow pt-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : 
          <p  className="text-sm opacity uppercase font-medium text-stone-500">Sold out</p>}
          {isInCart && <UpdateItemQuantity pizzaId={id}/>}
          {isInCart && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && <Button type="small" onClick={handleAddToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

// Define prop-types for the pizza object
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenuItem;
