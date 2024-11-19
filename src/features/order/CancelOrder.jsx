import React from 'react'
import Button from '../../Ui/Button'
import { useFetcher } from 'react-router-dom'
import { cancelOrder } from '../../services/apiRestaurant'

function CancelOrder() {
    const fetcher = useFetcher()
    const isSubmitting  = fetcher.state === 'submitting';
  return (
    <fetcher.Form method='DELETE' className='text-right'>

   <Button type="primary">
    {isSubmitting ?'Cancelling...' : 'Cancel Order'}
   </Button>
    </fetcher.Form>
  )
}

export default CancelOrder

export async function action({params}) {
    cancelOrder(params.orderId)
    return null
}