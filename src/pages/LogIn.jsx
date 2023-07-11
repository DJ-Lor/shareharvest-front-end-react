"use client";

import { Label, TextInput } from "flowbite-react";
import CustomButton from "../components/CustomButton";

export default function LogIn() {
  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 ">
            <form className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md ">
              <p className=" text-brownc font-bold text-center text-lg px-4 pb-4">Good to have you back!</p>

                <TextInput
                  id="email1"
                  placeholder="Email"
                  required
                  type="email"
                  className=" text-brownc"
                />
              
              <div className="pb-4">
               
                <TextInput
                  id="password1"
                  required
                  placeholder="Password"
                  type="password"
                  className=" text-brownc"
                />
              </div>
            
              <CustomButton type="submit" className="bg-pinkc">
                Log In
              </CustomButton>
              <a href="/" className= "text-brownc underline text-sm text-center">Forgot Your Password?</a>
            </form>
    </div>
  )
}


