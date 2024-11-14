// import React, { createContext, useContext, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getTotalCartPrice } from '../cart/cartSlice';


//   const OrderContext = createContext();


// export function OrderProvider({ children }) {
//     const [withPriority, setWithPriority] = useState(false);
//     const totalCartPrice = useSelector(getTotalCartPrice)

  
//     // محاسبه totalPrice با در نظر گرفتن priority
//     const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
//     const totalPrice = totalCartPrice + priorityPrice;
  
//     return (
//       <OrderContext.Provider
//         value={{
//           withPriority,
//           setWithPriority,
//           totalCartPrice,
//           totalPrice,
//         }}
//       >
//         {children}
//       </OrderContext.Provider>
//     );
//   }
// export const useOrder  => useContext(OrderContext);