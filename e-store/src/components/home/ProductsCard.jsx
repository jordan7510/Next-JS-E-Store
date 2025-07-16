"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProductsCard() {

    const [products, setProducts] = useState([])
    const slides = [
        {
            id: 1,
            url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
        },
    ]
    return (
        <div className='max-w-48 shadow-lg bg-slate-50 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out p-2' >
            <div className='relative h-48 px-2'>
                <Image
                    src={"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"}
                    alt='https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg'
                    fill
                    className='object-cover'
                />
            </div>
            <div className='px-2 py-1'>
                <h2 className='text-lg font-medium text-gray-950 mb-1'>Product Title</h2>
                <p className='text-md font-semibold text-gray-800 mb-1'>Lorem ipsum dolor sit amet.</p>
                <button className='mb-1 font-semibold bg-pink-600 text-white px-2 py-1 rounded-md cursor-pointer'>Buy Now</button>
            </div>
        </div>
    )
}
