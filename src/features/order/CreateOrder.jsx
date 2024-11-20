import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store"
import { formatCurrency } from "../../utilities/helpers";
import { useState } from "react";
import { fetchAddress } from "../users/userSlice";
// import CartOverview from "../cart/CartOverview";
// import { useOrder } from "./OrderContext";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

 

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const dispatch = useDispatch();
  const {username , status : addressStatus ,position ,  Address , error : errorAddress } = useSelector(state => state.user);
  console.log(Address);
 const isLoadingAddress = addressStatus === "loading";

  const cart = useSelector(getCart);
//  const { withPriority , setWithPriority , totalPrice} = useOrder()
 
 const [withPriority, setWithPriority] = useState(false);
     const totalCartPrice = useSelector(getTotalCartPrice)
     const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
     const totalPrice = totalCartPrice + priorityPrice;
if(!cart.length) return <EmptyCart />
  return (
    <div >
    {/* <CartOverview totalPrice={totalPrice}/> */}
      <h2 className="mb-4 ml-6 font-semibold text-xl	relative sm:text-2xl">Ready to order? Let's go!</h2>
     

      <Form method="POST" className="m-6">
        <div>
          <label >First Name</label>
          <input className="input" type="text" defaultValue={username}  name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div> 
          {formErrors?.phone && <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="input md:rounded-2xl" type="text" name="address" defaultValue={Address} disabled={isLoadingAddress} required />
            {addressStatus === "error" && <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{errorAddress}</p>}
            {!position.latitude && !position.longitude && <span className="absolute text-sm py-1 px-4 right-[1rem] md:right-[25.9rem] md:bottom-[18.9rem] z-50">
          <Button type="small"  disabled={isLoadingAddress} onClick={(e) => {
            e.preventDefault();
            dispatch(fetchAddress())
            }}>Get position</Button>
          </span>}
          </div>
          
        </div>

        <div>
          <input
          className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="px-3 mt-4" htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div className="mt-5">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ?`${position.latitude},${position.longitude}` : ``}/> 
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
          {isSubmitting ? "Placing order..." :`Order now from ${formatCurrency(totalPrice) }`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  // Form information extraction
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please provide a valid phone number. We need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`);
  // return null
}










 