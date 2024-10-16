"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const Logout = () => {
        try {
            axios.get("/api/UserData/LogoutRoute")
            console.log("Logout Successfully !!!");
            alert("Processing !!!")
            // toast('Processing !!!', {
            //     position: "bottom-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            //     transition: "Bounce",
            // })
            router.push("/pages/SignUp")

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {/* <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            /> */}
            <button 
            className='text-black'
                onClick={Logout}
                type="submit">
                Logout
            </button>
        </>
    )
}

export default page
