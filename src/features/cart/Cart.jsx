import { Link } from 'react-router-dom';
import LinkButton from '../../Ui/LinkButton';
import Button from '../../Ui/Button';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className='py-3 px-4'>
      <LinkButton  to="/menu" className='text-sm text-blue-500 hover:text-blue-600 hover:underline'>&larr; Back to menu</LinkButton>

      <h2 className='font-semibold text-xl mt-7 mb-5'>Your cart, %NAME%</h2>
      <ul className='divide-y divide-stone-200 border-b mt-3 px-3'>
        {cart.map((item) => (<CartItem item={item} key={item.key}  />))}
      </ul>
      <div className='mt-6 space-x-2'>
      <Button to="/order/new" type='primary'>Order pizzas</Button>
   
        <Button type='primaryClear'  >Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
