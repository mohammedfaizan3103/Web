"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiate, fetchData } from '../actions/useractions'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const PaymentsPage = (params) => {
    const { data: session } = useSession()
    const [paymentForm, setPaymentForm] = useState({ message: "", amount: "" })
    const [error, setError] = useState("")
    const [payments, setPayments] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }
    const router = useRouter()
    const pay = async (amount) => {
        if(!session) {
            router.push("/login")
            return
        }
        if (amount == "") {
            setError("Enter amount")
            return
        }
        if (paymentForm.message == "") {
            setError("Enter Message")
            return
        }
        if (amount != "") {
            setError("")
            let conf = confirm(`Make payment of ₹${amount}?`)
            if (conf) {
                let a = await initiate(amount, params.username, session?.user.mongo_id, paymentForm.message)
                if (a) {
                    setPaymentForm({ message: "", amount: "" })
                }
            }
            getData()
        }
        // let order_id = a.id
        // var options = {
        //     "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
        //     "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //     "currency": "INR",
        //     "name": "Get Me A Chai", //your business name
        //     "description": "Test Transaction",
        //     "image": "https://example.com/your_logo",
        //     "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        //     "callback_url": `${process.env.URL}/api/razorpay`,
        //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        //         "name": "Gaurav Kumar", //your customer's name
        //         "email": "gaurav.kumar@example.com",
        //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        //     },
        //     "notes": {
        //         "address": "Razorpay Corporate Office"
        //     },
        //     "theme": {
        //         "color": "#3399cc"
        //     }
        // }
        // var rzp1 = new Razorpay(options);
        // rzp1.open();
    }
    const getData = async () => {
        let donations = await fetchData(params.username)
        console.log(donations);

        setPayments(donations)
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='text-white'>
                <div className="cover w-full relative h-[400px]">
                    <img className='object-cover w-full h-[350px]' src="patreon_banner.gif" alt="" />
                    <div className="absolute bottom-0 right-[46%]">
                        <img className='rounded-full' height={100} width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz8ld4ITbiMxn6vASb9_j8yplJUnUEz0rbg&s" alt="" />
                    </div>
                </div>
                <div className="info text-white flex flex-col items-center my-3 gap-2">
                    <h1 className="text-3xl font-semibold">@{params.username}</h1>
                    <div className='text-slate-400'>Creating Animated art for VTT's</div>
                    <div className='text-slate-400'>13,385 members &#8226;  87 posts &#8226; $17,710 raised</div>
                </div>
                <div className='flex justify-center gap-3'>
                    <div className="supporters w-full ml-4 my-3 bg-slate-900 rounded-lg p-3 px-5">
                        <h2 className='font-bold text-xl mb-2'>Top Supporters</h2>
                        <ul >
                            {payments.map(item => {
                                return (
                            <li key={item._id}>
                                <p className='my-2'>{item.from_name} donated ₹{item.amount} with message: {item.message}</p>
                                <div className="h-[1.5px] bg-slate-500"></div>
                            </li>

                            )
                                })}

                        </ul>
                    </div>
                    <div className="payment w-full mr-4 my-3 bg-slate-900 rounded-lg p-3 px-5">
                        <h2 className='font-bold text-xl mb-2'>Supporters</h2>
                        <div className='flex flex-col gap-2'>
                            {/* <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" placeholder='Enter Name' name="name" autoComplete="off" /> */}
                            <input onChange={handleChange} value={paymentForm.message} className='rounded-sm h-8 px-2 bg-slate-700' type="text" placeholder='Enter Message' name="message" autoComplete="off" />
                            <input onChange={handleChange} value={paymentForm.amount} className='rounded-sm h-8 px-2 bg-slate-700' type="number" placeholder='Enter Amount' name="amount" autoComplete="off" />
                            <div className="error_msg text-red-600">{error}</div>
                        </div>
                        <div className="flex justify-center">
                            <button class=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span onClick={() => pay(paymentForm.amount)} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Make Payment
                                </span>
                            </button>
                        </div>
                        <div className='flex gap-2 my-1'>
                            <div className='bg-slate-700 px-3 py-2 text-sm text-slate-300 cursor-pointer hover:text-white rounded-md' onClick={() => setPaymentForm({ message: paymentForm.message, amount: 500 })}>₹500</div>
                            <div className='bg-slate-700 px-3 py-2 text-sm text-slate-300 cursor-pointer hover:text-white rounded-md' onClick={() => setPaymentForm({ message: paymentForm.message, amount: 1000 })}>₹1000</div>
                            <div className='bg-slate-700 px-3 py-2 text-sm text-slate-300 cursor-pointer hover:text-white rounded-md' onClick={() => setPaymentForm({ message: paymentForm.message, amount: 5000 })}>₹5000</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentsPage
