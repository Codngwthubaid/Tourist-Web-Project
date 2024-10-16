import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    Key_Secret : process.env.RAZORPAY_KEY_SECRET
})

export async function POST() {
    try {
        const order = await razorpay.orders.create({
            amount: 100 * 100,
            currency: "INR",
            receipt: "receipt" + Math.random().toString(36).substring(7) 
        })

        return NextResponse.json(
            {orderId : order.id},
            {status: 200}
        )
    } catch (error) {
        console.log("Error Creating Order : ",error);
        return NextResponse.json(
            {error: "Error Creating Order"},
            {status: 500}
        )
    }
}