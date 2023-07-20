import { useState } from "react";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react"
import { Navigate } from "react-router-dom";

// Hook Import ---
import { useAuth } from "../../hooks/useAuth";


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    auth.login(email, password).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
    {auth?.isAuthenticated ? (
      <Navigate to="/dashboard" />
    ) : (
    <div className="bg-brownc md:px-12 lg:px-14 py-10 md:py-16 lg:py-10">
      <form className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className=" text-brownc font-bold text-center text-lg px-4 pb-4">
          Good to have you back!
        </p>

        <TextInput
          id="email1"
          placeholder="Email"
          required
          type="email"
          className=" text-brownc"
          onChange={handleChangeEmail}
        />

        <div className="pb-4">
          <TextInput
            id="password1"
            required
            placeholder="Password"
            type="password"
            className=" text-brownc"
            onChange={handleChangePassword}
          />
        </div>

        <Button
            onClick={handleFormSubmit}
            className="bg-pinkc"
            pill
            isProcessing={loading}
            disabled={loading}
            >
            Log In
        </Button>
        <a href="/forgotpassword" className="text-brownc underline text-m mt-2 text-center hover:font-bold">
          Forgot Your Password?
        </a>
      </form>
    </div>)}
    </div>
  );
}


