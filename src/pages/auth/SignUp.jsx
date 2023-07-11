"use client";

import { Label, TextInput } from "flowbite-react";
import CustomButton from "../../components/CustomButton";

export default function SignUp() {
  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 ">
      <form className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className=" text-brownc font-bold text-center text-lg px-4 pb-4">
          Create your community profile
        </p>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username1"
              value="Username"
              className=" text-brownc"
            />
          </div>
          <TextInput
            id="username1"
            placeholder="username"
            required
            type="username"
            className=" text-brownc"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Email Address"
              className=" text-brownc"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="example@mail.com"
            required
            type="email"
            className=" text-brownc"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Password"
              className=" text-brownc"
            />
          </div>
          <TextInput
            id="password1"
            required
            placeholder="password"
            type="password"
            className=" text-brownc"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="postcode1"
              value="Postcode"
              className=" text-brownc"
            />
          </div>
          <TextInput
            id="postcode1"
            placeholder="e.g. 3000"
            required
            type="postcode"
            className=" text-brownc pb-4"
          />
        </div>
        <CustomButton type="submit" className="bg-pinkc">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
}
