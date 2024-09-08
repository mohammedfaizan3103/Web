"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {

    const { data: session } = useSession()
    if (!session) {
        const router = useRouter()
        router.push("/login")
    }
    if (session) {
        return (
            <div className="flex justify-center text-white">
                <div className='space-y-3 mt-3'>
                    <h1 className='text-3xl font-semibold'>Welcome to your Dashboard</h1>
                    <form className='flex flex-col gap-2' action="" autocomplete="off">
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="name" id="name" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Username</label>
                            <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="username" id="username" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Profile Picture</label>
                            <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="profile" id="profile" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Cover picture</label>
                            <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="cover" id="cover" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">RazorPay Id</label>
                            <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="razorId" id="razorId" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">RazorPay Secret</label>
                            <input className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="secret" id="secret" />
                        </div>
                    </form>
                    <div className="flex justify-center">
                        <button class=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Save
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default page
