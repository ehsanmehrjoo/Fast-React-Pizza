import PropTypes from "prop-types";
import { formatCurrency } from "../../utilities/helpers";
import Button from "../../Ui/Button";

function MenuItem({ pizza }) {
  const { 
    // id,
     name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex  gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale ' : ''} `} />
      <div className="flex flex-col  grow pt-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : 
          <p  className="text-sm opacity uppercase font-medium text-stone-500">Sold out</p>}
          <Button type="small">Add to Cart</Button>
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
