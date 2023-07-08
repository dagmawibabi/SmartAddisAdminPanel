"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginSignUp() {
    const router = useRouter();
    const [loginError, setLoginError] = useState(false);

    function abc() {
        let usernameInput = document.getElementById("username") as HTMLInputElement;
        let username = usernameInput.value;
        let passwordInput = document.getElementById("password") as HTMLInputElement;
        let password = usernameInput.value;
        if(username == "admin" && password == "admin"){
            router.push("/homePage");
        } else {
            setLoginError(true);
        }
    }
    return (
        <div className="bg-zinc-200 h-screen w-screen flex text-black">
            <div className="w-2/4 h-screen">
                <Image src="/AALogo.png" alt="logo" width={200} height={100} className="m-auto mt-[35%]" />
                <div className='px-5 w-96 text-center m-auto mt-5'>
                    <span className='text-xl font-bold'> Addis Ababa City Adminstration Innovation and Technology Development Bureau </span>
                </div>
            </div>

            {/* Login Form */}
            <div className="w-2/4 h-screen bg-zinc-900 text-white">
                <div className="w-fit h-fit m-auto my-[40%]">
                    <span className="text-2xl"> Smart Addis Admin Panel </span>
                    <div className={loginError == false ? "bg-zinc-700 border border-zinc-700 px-5 py-4 rounded-lg mt-5" : "bg-zinc-700 border border-red-600 px-5 py-4 rounded-lg mt-5"}>
                        <div className="flex justify-between w-80">
                            <label className="mr-2"> Username </label>
                            <input className="input input-bordered h-8 w-64 rounded-md" type="text" id="username"/>
                        </div>
                        <br />
                        <div className="flex justify-between w-[340px]">
                            <label className="mr-2"> Password </label>
                            <input className="input input-bordered h-8 w-64 rounded-md" type="password" id="password"/>
                        </div>
                    </div>
                    {
                        loginError == true ? 
                            <div className="flex justify-center mt-2 ">
                                <span className="text-center text-red-500"> Incorrect Username or Password </span>
                            </div>
                        : <div> </div>
                    }
                    
                    <div className="bg-blue-700 px-5 py-2 rounded-lg mt-5 mb-4 text-center hover:bg-blue-600" onClick={abc}>                        
                        <span> Login </span>
                    </div>

                    <div className="flex justify-center">
                        <span className="text-center text-zinc-500"> Forgot Password </span>
                    </div>

                </div>
            </div>
        </div>
    )

}