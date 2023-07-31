"use client";

export default function ForgotPassword() {
  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 items-center ">
      <form className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className=" text-brownc font-bold text-center text-lg px-4 pb-4">
          Forgot your password?
        </p>
        <p className=" text-brownc text-center text-md px-4 pb-4">
        Please email <strong>support@shareharvest.com</strong> and we will help reset your password. 
        </p>
        <a href="/" className="text-pink2c hover:text-brownc underline text-sm text-center">
          Return to Homepage
        </a>
      </form>
    </div>
  );
}
