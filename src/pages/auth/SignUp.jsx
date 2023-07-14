import { Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

// Hook Import ---
import { useAuth } from "../../hooks/useAuth";

export default function SignUp() {
  // Set up the form's local state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePostcode = (event) => {
    setPostcode(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    auth.signup(username, email, password, postcode).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      {auth?.isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
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
                value={username}
                onChange={handleChangeUsername}
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
                value={email}
                onChange={handleChangeEmail}
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
                value={password}
                onChange={handleChangePassword}
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
                value={postcode}
                onChange={handleChangePostcode}
                className=" text-brownc pb-4"
              />
            </div>
            <Button
              onClick={handleFormSubmit}
              className="bg-pinkc"
              pill
              isProcessing={loading}
              disabled={loading}
            >
              Sign Up
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
