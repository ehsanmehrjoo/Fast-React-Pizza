import React from 'react'
import Button from '../../Ui/Button'
import { redirect, useFetcher } from 'react-router-dom'
import {  removeOrder } from '../../services/apiRestaurant'

function CancelOrder({order}) {
 
    const fetcher = useFetcher()
    const isSubmitting  = fetcher.state === 'submitting';
  return (
    <fetcher.Form method="DELETE" action={`/order/${order.id}/cancel`} className="text-right">
    <Button type="primary">{isSubmitting ? "Cancelling..." : "Cancel Order"}</Button>
  </fetcher.Form>
  
  )
}

export default CancelOrder

export async function action({params}) {
 // فرض کنید params شامل orderId است
 const { orderId } = params;
 console.log(orderId);

 // فراخوانی تابع حذف سفارش با آیدی
 await removeOrder(orderId);
 
 // هدایت کاربر به صفحه منو
 return redirect(`/menu`);
}