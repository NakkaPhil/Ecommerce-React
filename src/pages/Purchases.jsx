import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PurchaseCard from '../components/PurchaseCard'
import { getPurchasesThunk } from '../store/slices/purchases.slice'

export default function Purchases() {
  const dispach = useDispatch()
  const purchases = useSelector(state => state.purchases)

  useEffect(()=>{
    dispach(getPurchasesThunk())
  },[])

  console.log(purchases)
  return (
    <div className='mt-5'>
        <h4 className='text-center'>Purchases</h4>
        {purchases.map((purchase)=> (<PurchaseCard purchase={purchase}/>))}
    </div>
  )
}
