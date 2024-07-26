"use client"
import { useRef } from 'react'
import { handleSubmit } from '@/actions/form';

export default function Home() {
  
  const ref = useRef()
  return (
   <main className="flex justify-center my-48">
    <form ref = {ref} action={(e) => {
        handleSubmit(e);
        ref.current.reset()
      }
    }>
      <div><input type="text" name="username" placeholder="username" className="text-black" /></div>
      <div><input type="password" name="password" placeholder="password" className="text-black" /></div>
      <div><input type="submit" name="submit" id="submit" className="border border-white p-2" /></div>
    </form>
   </main>
  );
}
