import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === "/pages/Login" || path === "/pages/SignUp" || path === "/"
    const Token = request.cookies.get("Token")?.value || null;
    console.log("Token:", Token);


    if (isPublicPath && Token) {
        console.log("Redirecting to Profile");
        return NextResponse.redirect(
            new URL("/pages/Destination", request.nextUrl)
        )
    }
    if (!isPublicPath && !Token) {
        console.log("Redirecting to Login")
        return NextResponse.redirect(
            new URL("/", request.nextUrl)
        )
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher:
        [
            "/pages/Login",
            "/pages/SignUp",
            "/pages/Profile",
            "/pages/Features",
            "/pages/VerifyEmail",
            "/"
        ]
}