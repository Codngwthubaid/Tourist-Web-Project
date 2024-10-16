"use client"
import React, { useState } from 'react'
import Script from 'next/script'

const Page = () => {
    const AMOUNT = 100;
    const [isProcessing, setIsProcessing] = useState(false)

    const handlePayment = async () => {
        setIsProcessing(true)

        try {
            const response = await fetch("/api/UserData/Payment", { method: "post" })
            const data = await response.json()

            // Init Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                currency: "INR",
                amount: AMOUNT * 100,
                name: "Company Name",
                description: "Test Transaction",
                order_id: data.order_id,
                handler: function (response) {
                    console.log("Payment Successful : ", response);
                },
                prefill: {
                    name: "Ubaid",
                    email: "codngwthubaid@gmail.com",
                    contact: "7535000000"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const windowRazorpay = new window.Razorpay(options)
            windowRazorpay.open();

        } catch (error) {
            console.log("Payment failed : ", error);
        }
        finally {
            setIsProcessing(false)
        }
    }

    return (
        <div>
            <div className='flex justify-center items-center bg-slate-500 flex-col'>
                <Script src='https://checkout.razorpay.com/v1/checkout.js' />
                <h1 className='text-2xl font-bold mb-4'></h1>
                <p className='mb-4'>Amount to pay : {AMOUNT} INR</p>
                <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className='text-white bg-blue-600 hover:bg-blue-800'
                >
                    {isProcessing ? "Processing" : "Pay Now"}
                </button>
            </div>
        </div>
    )
}

export default Page