 
import LinkButton from '../../Ui/LinkButton';

function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu" className='text-sm   text-blue-500 hover:text-blue-600 hover:underline'>&larr; Back to menu</LinkButton>
      <p className='mt-5'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
