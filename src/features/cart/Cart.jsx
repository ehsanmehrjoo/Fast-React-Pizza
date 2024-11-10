import { Link } from 'react-router-dom';
import LinkButton from '../../Ui/LinkButton';
import Button from '../../Ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { clearCart, getCart } from './cartSlice';

 

function Cart() {
  // const cart = fakeCart;
  const cart = useSelector(getCart)
  console.log(cart);
 
const username = useSelector(state => state.user.username)

const dispatch = useDispatch()

function handleClearCart(){
  dispatch(clearCart(cart))
}

if(cart.length === 0) return <EmptyCart />;

  return (
    <div className='py-3 px-4'>
      <LinkButton  to="/menu" className='text-sm text-blue-500 hover:text-blue-600 hover:underline'>&larr; Back to menu</LinkButton>

      <h2 className='font-semibold text-xl mt-7 mb-5'>Your cart, {username} </h2>
      <ul className='divide-y divide-stone-200 border-b mt-3 '>
        {cart.map((item) => (<CartItem item={item} key={item.key}  />))}
      </ul>
      <div className='mt-6 space-x-2'>
      <Button to="/order/new" type='primary'>Order pizzas</Button>
   
        <Button type='secondary'  onClick={handleClearCart}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
