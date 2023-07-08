"use client"
import { VendingMachineService } from '@/lib/VendingMachineService'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const vendingService = new VendingMachineService({
   "Cheetos": {
    quantity: 10,
    amount: 4
   }
  }, 500);
  const [state, setState] = useState({
    item: 'cheetos',
    amount: 40,
    quantity: 2
  });
  return (
    <main>
      <input type="text" name='item' value={state.item} onChange={(event) => setState({...state, item: event.target.value})}/>
      <input type="number" name="amount" id="amount" value={state.amount} onChange={(event) => setState({...state, amount: parseInt(event.target.value, 10)})} />
      <input type="number" name="quantity" id="quantity" value={state.quantity} onChange={(event) => setState({...state, quantity: parseInt(event.target.value, 10)})} />
      <button onClick={() => console.log(vendingService.getVendingItemResponse(state))}>Get me cheetos</button>
    </main>
  )
}
